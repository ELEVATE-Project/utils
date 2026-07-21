# Dev Deployment Guide — Mitra Service

This is a practical guide for triggering and troubleshooting deployments of the
Mitra service (`shikshalokam-mohini-service`) to the **dev** environment via
Jenkins + Ansible.

---

## 1. Prerequisites

To trigger a deployment, make sure you have access to all of the below:

| System | URL | POC |
|---|---|---|
| Jenkins | http://10.0.136.199:8080 | Rakesh |
| Vault | https://10.0.136.199:8200 | Rakesh |
| Pritunl (VPN) | — | Bharath |

You need **Pritunl VPN access** first — none of the above are reachable from
the open internet. Connect to the VPN before opening either Jenkins or Vault.

The dev deploy job itself lives at:

```
http://10.0.136.199:8080/job/Dev/job/mitra/job/mitra-backend-service-deployment/
```

---

## 2. Triggering a Deployment

1. Connect to the Pritunl VPN.
2. Go to the Jenkins job above and click **Build with Parameters**.
3. Fill in the parameters:

| Parameter | Required? | Notes |
|---|---|---|
| `REPO_SOURCE` | Yes | Dropdown of allowed repos/forks. Only pre-approved entries appear here — see [Adding your fork](#3-adding-your-own-fork) below if yours isn't listed. |
| `GIT_REF_TYPE` | Yes | `Branch` or `Tag`. |
| `GIT_REF` | Yes | The actual branch name or tag to deploy. Build fails immediately if left blank. |
| `UVICORN_WORKERS` | No | Leave blank to use the environment default. Only vetted values are selectable (`4`, `9`, `12`, `16`) — you can't fat-finger an overload value. |
| `CELERY_CONCURRENCY` | No | Same idea — leave blank for the default, or pick from `25`/`50`/`75`/`100`. |

4. Click **Build**. Only one deploy to dev can run at a time — a second
   trigger will queue/reject rather than run concurrently, since this
   deploy strategy has no isolation between simultaneous runs.
5. Watch the console output. A successful run ends with:
   ```
   Deployed <ref> (<Branch/Tag>) to dev (dev)
   ```
   A failed run prints which stage failed - the Ansible playbook output
   (further down the console log) usually has the real error.

---

## 3. Adding Your Own Fork

The `REPO_SOURCE` dropdown is intentionally locked to a fixed list — this
stops a mistyped repo URL from silently deploying the wrong code. If you want
to deploy from your own fork, **contact Vishnu** to get it added to the
dropdown (naming convention: `dev-<yourname>-fork`).

---

## 4. Changing Environment Variables / Secrets

App config (`.env`) and GCP credentials (`config/secrets.json`) are **not**
edited on the server directly — they're pulled fresh from Vault on every
deploy. To change a value:

1. Log into the Vault UI: **https://10.0.136.199:8200/ui** (via VPN).
2. Navigate to the relevant secret path under the `Dev_env` KV v2 mount:
   - `Dev_env/mitra_backend_service_env` — becomes the app's `.env` file.
   - `Dev_env/mitra_gcp_credentials` — becomes `config/secrets.json`.
3. Edit the secret and save — this creates a **new version** (Vault KV v2 is
   versioned; nothing is overwritten in place).
4. Trigger a deployment (Section 2). The playbook always fetches the
   **latest** version of each secret on every run, so the new values take
   effect on the very next deploy — no separate "publish" step needed.

You don't need to touch Jenkins or the codebase for a pure config/secret
change — only Vault + a re-trigger.

---

## 5. What a Deploy Actually Does

Each run clones fresh code into a new timestamped release folder, wires up
config, and then swaps it into place:

1. Checkout the requested branch/tag from the resolved repo.
2. Verify the target host resolves in the shared Ansible inventory (fails
   loudly rather than silently deploying nothing).
3. **Ansible playbook** (`deploy/ansible/deploy.yml`) runs on the target host:
   - Clone code into a new `releases/<timestamp>/` folder.
   - Fetch `config/secrets.json` from Vault.
   - Install Python deps (`uv sync --frozen`).
   - Run Django migrations.
   - **Delete** the old live directory and move the new release into its
     place (there is a brief window of downtime here — this project does
     **not** use an atomic symlink swap, by design).
   - Fetch `.env` from Vault directly into the now-live directory.
   - Restart the `mitra-uvicorn` and `mitra-celery` systemd services (a real
     process restart — old processes are killed, new ones started against
     the new code).
   - Health check `http://localhost:<port>/health/`, retrying for ~15
     seconds while the service boots. If it never returns `200`, the whole
     deploy fails and the temporary release folder is cleaned up — **there
     is no automatic rollback** of the already-swapped live directory.

---

## 6. Where Things Live / Useful Commands

On the target server (reach it via VPN + SSH):

| What | Path / Command |
|---|---|
| Live app directory | `/opt/deployment/backend/mitra-service/mitra-backend-service` |
| Vault token (shared) | `/opt/deployment/.token` |
| Check service status | `systemctl status mitra-uvicorn mitra-celery` |
| Tail logs | `journalctl -u mitra-uvicorn -n 100 --no-pager` / same for `mitra-celery` |
| Confirm port is listening | `ss -tlnp \| grep <port>` |
| Manual health check | `curl -s -o /dev/null -w "HTTP %{http_code}\n" http://localhost:<port>/health/` |
| Celery active tasks | `celery -A shikshalokam_mohini inspect active` |
| Celery pool stats | `celery -A shikshalokam_mohini inspect stats` |

---

## Contacts

| Area | Contact | Email |
|---|---|---|
| Jenkins access | Rakesh | rakesh@shikshalokam.org |
| Vault access | Rakesh | rakesh@shikshalokam.org |
| Pritunl VPN access | Bharath | bharath@shikshalokam.org |
| Adding a repo/fork to the dropdown | Vishnu | vishnu@tunerlabs.com |
