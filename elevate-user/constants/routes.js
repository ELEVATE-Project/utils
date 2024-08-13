module.exports = {
	routes: [
		{
			sourceRoute: '/interface/v1/account/create',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
			targetRoute: {
				path: '/user/v1/account/create',
				type: 'POST',
				functionName: 'createUser',
			},
		},
		{
			sourceRoute: '/interface/v1/account/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'POST',
				functionName: 'updateUser',
			},
		},
		{
			sourceRoute: '/interface/user-signup',
			type: 'POST',
			inSequence: true,
			orchestrated: true,
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
			targetRoute: {
				path: '/user/v1/account/generateToken',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/generateOtp',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/generateOtp',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/logout',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
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
			targetRoute: {
				path: '/user/v1/account/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/account/registrationOtp',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/registrationOtp',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/user/read/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/user/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/user/setLanguagePreference',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/setLanguagePreference',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/user/share',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
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
			targetRoute: {
				path: '/user/v1/form/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/form/read/:id',
			type: 'POST',
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
			targetRoute: {
				path: '/user/v1/cloud-services/file/getSignedUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/cloud-services/file/getDownloadableUrl',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/cloud-services/file/getDownloadableUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/admin/deleteUser',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/deleteUser',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/admin/deleteUser/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/deleteUser/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/admin/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/admin/login',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/login',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
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
			targetRoute: {
				path: '/user/v1/organization/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/organization/update/:id',
			type: 'PATCH',
			inSequence: false,
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
			targetRoute: {
				path: '/user/v1/organization/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/entity-type/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
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
			targetRoute: {
				path: '/user/v1/entity/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/entity/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity/list',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/inheritEntityType',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/org-admin/inheritEntityType',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/read',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/organization/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/admin/addOrgAdmin',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/admin/addOrgAdmin',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/bulkUserCreate',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/org-admin/bulkUserCreate',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/getBulkInvitesFilesList',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/org-admin/getBulkInvitesFilesList',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/getRequestDetails/:id',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/org-admin/getRequestDetails/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/deactivateUser',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/org-admin/deactivateUser',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/getRequests',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/org-admin/getRequests',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/updateRequestStatus',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/org-admin/updateRequestStatus',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/requestOrgRole',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/organization/requestOrgRole',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/admin/deactivateOrg/:id',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/admin/deactivateOrg/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/notification/create',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/notification/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/notification/update/:id',
			type: 'PATCH',
			targetRoute: {
				path: '/user/v1/notification/update/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/notification/read/:id',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/notification/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/notification/read',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/notification/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/cloud-services/file/getSampleCSV',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/cloud-services/file/getSampleCSV',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/notification/template',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/notification/template',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/notification/template/:id',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/notification/template/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/notification/template',
			type: 'PATCH',
			targetRoute: {
				path: '/user/v1/notification/template',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/user/v1/account/search',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/account/search',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/permissions/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/permissions/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/permissions/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/permissions/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/permissions/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/permissions/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/permissions/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/permissions/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/modules/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/modules/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/modules/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/modules/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/modules/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/modules/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/user/v1/modules/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/modules/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/user/v1/role-permission-mapping/delete/:role_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/role-permission-mapping/delete/:role_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/role-permission-mapping/create/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/role-permission-mapping/create/:id',
				type: 'POST',
			},
		},	
		{
			sourceRoute: '/elevate-user/v1/role-permission-mapping/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/role-permission-mapping/list',
				type: 'GET',
			},
		},	
		{
			sourceRoute: '/elevate-user/v1/role-permission-mapping/delete/:id',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/permissions/delete/:id',
				type: 'DELETE',
			},
		},	
		{
			sourceRoute: '/user/v1/role-permission-mapping/create/:role_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/role-permission-mapping/create/:role_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/role-permission-mapping/list',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/role-permission-mapping/list',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/org-admin/updateUser',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/org-admin/updateUser',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/user/v1/organization/addRelatedOrg/:org_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/addRelatedOrg/:org_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/organization/removeRelatedOrg/:org_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/removeRelatedOrg/:org_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/changePassword',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/changePassword',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/user/v1/account/validatingEmailIds',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/validatingEmailIds',
      }
    },
		{
			sourceRoute: '/user/v1/account/sessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/sessions',
				type: 'GET',
			}
		},
		{
			sourceRoute: '/user/v1/account/validateUserSession',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/validateUserSession',
				type: 'POST',
			}
		},
		{
			sourceRoute: '/interface/v2/account/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v2/account/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/interface/v2/account/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-user/v2/account/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v2/account/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-user/v2/account/login',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v2/account/login',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-user/v2/account/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-interface/v2/account/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-interface/v2/account/login',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/login',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-interface/v2/account/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/org-admin/updateUser/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/org-admin/updateUser/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/generateOtp',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/generateOtp',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/resetPassword',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/resetPassword',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/acceptTermsAndCondition',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/acceptTermsAndCondition',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/logout',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/logout',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/registrationOtp',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/registrationOtp',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/org-admin/updateUser',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/org-admin/updateUser',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user/read/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/read/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user/share',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user/share',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/default',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/default',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/user-role/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/user-role/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/admin/deleteUser',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/deleteUser',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/admin/deleteUser/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/deleteUser/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/admin/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/admin/login',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/login',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/organization/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/organization/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/organization/update/:id',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/update/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/organization/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/organization/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/organization/read',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/organization/read',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/admin/addOrgAdmin',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/admin/addOrgAdmin',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/search',
			type: 'POST',
			targetRoute: {
				path: '/user/v1/account/search',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/searchByEmailIds',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/searchByEmailIds',
				type: 'POST',
			}
		},
		{
			sourceRoute: '/elevate-user/v1/org-admin/updateUser',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/org-admin/updateUser',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/elevate-user/v1/entity-type/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/entity-type/update',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/update',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/entity-type/update/:id',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/update/:id',
				type: 'PATCH',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/entity-type/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/entity-type/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: 'elevate-user/v1/admin/triggerViewRebuild',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/triggerViewRebuild',
				type: 'GET',
			},
		},
		{
			sourceRoute: 'elevate-user/v1/admin/triggerPeriodicViewRefresh',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/triggerPeriodicViewRefresh',
				type: 'GET',
			},
		},
		{
			sourceRoute: 'elevate-user/v1/admin/triggerPeriodicViewRefreshInternal',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/triggerPeriodicViewRefreshInternal',
				type: 'GET',
			},
		},
		{
			sourceRoute: 'elevate-user/v1/admin/triggerViewRebuildInternal',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/admin/triggerViewRebuildInternal',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/cloud-services/file/getSignedUrl',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/cloud-services/file/getSignedUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/cloud-services/file/getDownloadableUrl',
			type: 'GET',
			targetRoute: {
				path: '/user/v1/cloud-services/file/getDownloadableUrl',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/elevate-user/v1/account/validateUserSession',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/user/v1/account/validateUserSession',
				type: 'POST',
			}
		},
	]
}

/* const fs = require('fs')
const modifiedArray = [].map((item) => ({
	...item,
	targetRoute: {
		path: item.sourceRoute,
		type: item.type,
	},
}))
const modifiedArrayJSON = JSON.stringify(modifiedArray, null, 2)
const filePath = 'modifiedArray.json'
fs.writeFile(filePath, modifiedArrayJSON, 'utf8', (err) => {
	if (err) {
		console.error('Error writing to file:', err)
	} else {
		console.log('Modified array has been written to', filePath)
	}
}) */