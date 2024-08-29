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
			targetRoute: {
				path: '/mentoring/v1/profile/create',
				type: 'POST',
				functionName: 'createProfile',
			},
		},
		{
			sourceRoute: '/interface/v1/account/update',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/mentoring/v1/profile/update/',
				type: 'POST',
				functionName: 'updateUser',
			},
		},
		{
			sourceRoute: '/interface/v1/entity-type/read',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
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
			targetRoute: {
				path: '/mentoring/v1/role-permission-mapping/list',
				type: 'POST',
				functionName: 'rolePermissions',
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
			sourceRoute: '/mentoring/v1/org-admin/roleChange',
			type: 'POST',
			targetRoute: {
				path: '/mentoring/v1/org-admin/roleChange',
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
	],
}
