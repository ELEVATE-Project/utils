// redisCluster.js
const Redis = require("ioredis");

let redisClient = null;
let redisKeyPrefix = ''; // Optional: load from env

const RedisConfig = {
  config: async (nodesString,prefix = '') => {
    if (!nodesString) {
      throw new Error("❌ Missing REDIS_URL in environment");
    }

    if (prefix) {
      redisKeyPrefix = prefix;
    }

    const urls = nodesString.split(',');

    if (urls.length > 1) {
      const clusterNodes = urls.map((url) => {
        const { hostname, port } = new URL(url.trim());
        return { host: hostname, port: parseInt(port, 10) };
      });

      redisClient = new Redis.Cluster(clusterNodes);
      console.log('✅ Connected to Redis Cluster');
    } else {
      redisClient = new Redis(urls[0].trim());
      console.log('✅ Connected to Single Redis instance');
    }

    redisClient.on('error', (err) => {
      console.error('❌ Redis error:', err);
    });
  },

  getClient: () => {
    if (!redisClient) throw new Error("Redis client is not initialized. Call RedisConfig.config() first.");
    return redisClient;
  },
  getKeyPrefix: () => redisKeyPrefix
};

module.exports = RedisConfig;
