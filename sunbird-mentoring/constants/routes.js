module.exports = {
	routes: [
		{
			sourceRoute: '/mentoring/v1/entity/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/list',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/read/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/read/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/form/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/form/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/entity-type/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/entity-type/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/details',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/details/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/share',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/share',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/share/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/share/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/enroll',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/enroll',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/enroll/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/enroll/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/unEnroll',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/unEnroll',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/unEnroll/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/unEnroll/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/start',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/start',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/start/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/start/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/update',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/feedback',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/feedback',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/feedback/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/feedback/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/updateRecordingUrl',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/updateRecordingUrl',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/updateRecordingUrl/:id',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/updateRecordingUrl/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/completed',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/completed',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/completed/:id',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/completed/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/completed',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/completed',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/completed/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/completed/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/getRecording',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/getRecording',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/getRecording/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/getRecording/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/sessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/sessions',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/joinSession',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/joinSession',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/joinSession/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/joinSession/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/homeFeed',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/homeFeed',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/reports',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/reports',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/profile',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/profile',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/update',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/getMenteeExtension/',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/getMenteeExtension/',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/deleteMenteeExtension',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentees/deleteMenteeExtension',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/reports',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/reports',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/profile',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/profile',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/profile/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/profile/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/upcomingSessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/upcomingSessions',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/upcomingSessions/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/upcomingSessions/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/share',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/share',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/share/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/share/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/update',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/getMentorExtension',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/getMentorExtension',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/deleteMentorExtension',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/deleteMentorExtension',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/feedback/submit',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/feedback/submit',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/feedback/submit/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/feedback/submit/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/feedback/forms',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/feedback/forms',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/feedback/forms/:id',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/feedback/forms/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/update',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/update/:id',
			type: 'PUT',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/questions/read/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/questions/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/question-set/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/question-set/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/question-set/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/question-set/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/question-set/update/:id',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/question-set/update/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/question-set/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/question-set/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/question-set/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/question-set/read/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/users/pendingFeedbacks',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/users/pendingFeedbacks',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/users/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/users/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/issues/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/issues/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/platform/config',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/platform/config',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/admin/userDelete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/admin/userDelete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/interface/v1/account/create',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			service:"mentoring",
			targetRoute: {
				path: '/mentoring/v1/profile/create',
				type: 'POST',
				functionName: 'createProfile',
			},
		},
		{
			sourceRoute: '/interface/v1/entity-type/read',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			service:"mentoring",
			targetRoute: {
				path: '/mentoring/v1/entity-type/read',
				type: 'POST',
				functionName: 'entityTypeRead',
			},
		},
		{
			sourceRoute: '/interface/v1/account/login',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			service:"mentoring",
			targetRoute: {
				path: '/mentoring/v1/role-permission-mapping/list',
				type: 'POST',
				functionName: 'rolePermissions',
			},
		},
		{
			sourceRoute: '/interface/v1/profile/read',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			service:"mentoring",
			targetRoute: {
				paths: [
					{ path: '/mentoring/v1/users/create', type: 'POST' },
					{ path: '/mentoring/v1/profile/read', type: 'GET' },
				],
				type: 'POST',
				functionName: 'profileRead',
			},
		},
		{
			sourceRoute: '/mentoring/v1/role-permission-mapping/list',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/role-permission-mapping/list',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/org-admin/inheritEntityType',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/org-admin/inheritEntityType',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/org-admin/setOrgPolicies',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/org-admin/setOrgPolicies',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/org-admin/getOrgPolicies',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/org-admin/getOrgPolicies',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/profile/create',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/profile/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/profile/read',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/profile/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/profile/update',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/profile/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/cloud-services/getSignedUrl',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/cloud-services/getSignedUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/cloud-services/getDownloadableUrl',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/cloud-services/getDownloadableUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/admin/triggerPeriodicViewRefresh',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/admin/triggerPeriodicViewRefresh',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/admin/triggerViewRebuild',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/admin/triggerViewRebuild',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/admin/triggerPeriodicViewRefreshInternal',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/admin/triggerPeriodicViewRefreshInternal',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/admin/triggerViewRebuildInternal',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/admin/triggerViewRebuildInternal',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/createdSessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/createdSessions',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/details',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/details',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentors/details/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/mentors/details/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/notification/template',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/notification/template',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/notification/template',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/notification/template',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/notification/template/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/notification/template/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/notification/template/:id',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/notification/template/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/notification/template',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/notification/template',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/org-admin/updateOrganization',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/org-admin/updateOrganization',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/org-admin/updateRelatedOrgs',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/org-admin/updateRelatedOrgs',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/org-admin/deactivateUpcomingSession',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/org-admin/deactivateUpcomingSession',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/permissions/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/permissions/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/permissions/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/permissions/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/permissions/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/permissions/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/permissions/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/permissions/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/modules/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/modules/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/modules/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/modules/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/modules/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/modules/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/modules/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/modules/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/role-permission-mapping/create/:role_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/role-permission-mapping/create/:role_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/role-permission-mapping/delete/:role_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/role-permission-mapping/delete/:role_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/bulkSessionCreate',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/bulkSessionCreate',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/org-admin/uploadSampleCSV',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/org-admin/uploadSampleCSV',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/getSampleCSV',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/getSampleCSV',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/removeAllSessions',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/mentoring/v1/sessions/removeAllSessions',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/organization/update',
			type: 'PATCH',
			targetRoute: {
				path: '/mentoring/v1/organization/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/organization/eventListener',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/organization/eventListener',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/manage-sessions/createdSessions',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/manage-sessions/createdSessions',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/manage-sessions/downloadSessions',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/manage-sessions/downloadSessions	',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/manage-sessions/downloadSessions',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/manage-sessions/downloadSessions	',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/mentees/list',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/mentees/list	',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/profile/filterList',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/profile/filterList	',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/addMentees',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/sessions/addMentees',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/addMentees/:id',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/sessions/addMentees/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/removeMentees',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/sessions/removeMentees',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/removeMentees/:id',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/sessions/removeMentees/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/enrolledMentees/:id',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/sessions/enrolledMentees/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/enrolledMentees',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/sessions/enrolledMentees',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/sessions/bulkUpdateMentorNames',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/sessions/bulkUpdateMentorNames',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/create',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/availability/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/update',
			type: 'PATCH',
			targetRoute: {
				path: '/mentoring/v1/availability/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/update/:id',
			type: 'PATCH',
			targetRoute: {
				path: '/mentoring/v1/availability/update/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/delete',
			type: 'DELETE',
			targetRoute: {
				path: '/mentoring/v1/availability/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/delete/:id',
			type: 'DELETE',
			targetRoute: {
				path: '/mentoring/v1/availability/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/read',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/availability/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/read/:id',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/availability/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/isAvailable',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/availability/isAvailable',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/isAvailable/:id',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/availability/isAvailable/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/mentoring/v1/availability/users',
			type: 'GET',
			targetRoute: {
				path: '/mentoring/v1/availability/users',
				type: 'GET',
			},
		},
        {
			sourceRoute: '/interface/v1/account/create',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			service:"user",
			targetRoute: {
				path: '/user/v1/account/create',
				type: 'POST',
				functionName: 'createUser',
			},
		},
		{
			sourceRoute: '/interface/v1/entity-type/read',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			service:"user",
			targetRoute: {
				path: '/user/v1/entity-type/read',
				type: 'POST',
				functionName: 'entityTypeRead',
			},
		},
		{
			sourceRoute: '/interface/v1/account/login',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			service:"user",
			targetRoute: {
				path: '/user/v1/account/login',
				type: 'POST',
				functionName: 'loginUser',
			},
		},
		{
			sourceRoute: '/user/v1/account/login',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/account/login',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/acceptTermsAndCondition',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/account/acceptTermsAndCondition',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/account/resetPassword',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/account/resetPassword',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/generateToken',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/account/generateToken',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/logout',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/account/logout',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/private/user/v1/search',
				type: 'POST',
				functionName: 'accountList',
			},
		},
		{
			sourceRoute: '/user/v1/user/read/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				paths: [
					{ path: '/private/user/v1/read/:id', type: 'GET' },
					{
						baseUrl: 'http://lms-service:9000',
						path: '/private/v3/user/courses/list/:id',
						type: 'GET',
					},
				],
				functionName: 'readUserById',
			},
		},
		{
			sourceRoute: '/user/v1/user/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
			paths: [
				{
				path: '/private/user/v1/read/:id',
				type: 'GET'
				},
				{
					baseUrl: 'http://lms-service:9000',
					path: '/private/v3/user/courses/list/:id',
					type: 'GET'
				}
				],
				functionName: 'readUserWithToken'
			},
		},
		{
			sourceRoute: '/user/v1/user/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/user/share',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user/share',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user/share/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user/share/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user-role/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user-role/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user-role/default',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user-role/default',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user-role/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user-role/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/user-role/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user-role/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/user-role/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/user-role/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/form/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/form/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/form/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/form/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/form/read/:id',
			type: 'POST',
			service: "user",
			targetRoute: {
				path: '/user/v1/form/read/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/form/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/form/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/cloud-services/file/getSignedUrl',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/cloud-services/file/getSignedUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/cloud-services/file/getDownloadableUrl',
			type: 'GET',
			service: "user",
			targetRoute: {
				path: '/user/v1/cloud-services/file/getDownloadableUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/organization/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/organization/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/organization/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/organization/update/:id',
			type: 'PATCH',
			inSequence: false,
			service: "user",
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/update/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/organization/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/v1/org/search',
				type: 'GET',
				functionName: 'listOrganisation'
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity-type/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity-type/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/update/:id',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity-type/update/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity-type/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity-type/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity-type/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/entity/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/entity/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/entity/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/entity/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/entity/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			service: "user",
			targetRoute: {
				path: '/user/v1/entity/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/inheritEntityType',
			type: 'POST',
			service: "user",
			targetRoute: {
				path: '/user/v1/org-admin/inheritEntityType',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/read',
			type: 'GET',
			service: "user",
			targetRoute: {
				path: '/v1/org/read',
				type: 'POST',
				functionName: 'readOrganization',
			},
		},
		{
			sourceRoute: '/user/v1/admin/addOrgAdmin',
			type: 'POST',
			service: "user",
			targetRoute: {
				path: '/user/v1/admin/addOrgAdmin',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/bulkUserCreate',
			type: 'POST',
			service: "user",
			targetRoute: {
				path: '/user/v1/org-admin/bulkUserCreate',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/getBulkInvitesFilesList',
			type: 'GET',
			service: "user",
			targetRoute: {
				path: '/user/v1/org-admin/getBulkInvitesFilesList',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/notification/read',
			type: 'GET',
			service: "user",
			targetRoute: {
				path: '/user/v1/notification/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/account/search',
			type: 'POST',
			service: "user",
			targetRoute: {
				path: '/user/v1/account/search',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/permissions/list',
			type: 'GET',
			service: "user",
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/permissions/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/account/validatingEmailIds',
			type: 'POST',
			service: "user",
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/validatingEmailIds',
			},
		},
		{
			sourceRoute: '/user/v1/account/sessions',
			type: 'GET',
			service: "user",
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/sessions',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/account/validateUserSession',
			type: 'POST',
			priority: 'MUST_HAVE',
			service: "user",
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/validateUserSession',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/interface/v2/account/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v2/account/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/interface/v2/account/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'POST',
			},
		},
        {
			sourceRoute: '/scheduler/jobs/create',
			type: 'POST',
			service: "scheduler",
			targetRoute: {
				path: '/scheduler/jobs/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/updateDelay',
			type: 'POST',
			service: "scheduler",
			targetRoute: {
				path: '/scheduler/jobs/updateDelay',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/remove',
			type: 'POST',
			service: "scheduler",
			targetRoute: {
				path: '/scheduler/jobs/remove',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/list',
			type: 'GET',
			service: "scheduler",
			targetRoute: {
				path: '/scheduler/jobs/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/purge',
			type: 'POST',
			service: "scheduler",
			targetRoute: {
				path: '/scheduler/jobs/purge',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/interface/v1/mentors/details/:id',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			service:"user",
			targetRoute: {
				paths: [
					{ path: '/private/user/v1/read/:id', type: 'GET' },
					{
						baseUrl: 'http://lms-service:9000',
						path: '/private/v3/user/courses/list/:id',
						type: 'GET',
					},
				],
				functionName: 'readUserById',
			},
		},
		{
			sourceRoute: '/interface/v1/profile/read',
			type: 'GET',
			inSequence: true,
			orchestrated: true,
			service:"user",
			targetRoute: {
				paths: [
					{
						service: "user",
						path: '/private/user/v1/read/:id',
						type: 'GET'
					},
					{
						service: "user",
						baseUrl: 'http://lms-service:9000',
						path: '/private/v3/user/courses/list/:id',
						type: 'GET'
					}
					],
					functionName: 'readUserWithToken'
				},
		},
	],
}
