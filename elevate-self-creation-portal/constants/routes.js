module.exports = {
	routes: [
		{
			sourceRoute: '/scp/v1/permissions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/permissions/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/config/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/config/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/form/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/form/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/form/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/read/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/form/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/scp/v1/form/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/form/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/scp/v1/entity-types/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entity-types/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/entity-types/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entity-types/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/entity-types/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entity-types/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/organization-extensions/updateConfig/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/organization-extensions/updateConfig/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/organization-extensions/createConfig',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/organization-extensions/createConfig',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/entity-types/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entity-types/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/entity-types/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entity-types/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/entity-types/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entity-types/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/entities/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entities/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/entities/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entities/read',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/entities/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entities/read/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/entities/update',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entities/update',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/scp/v1/entities/update/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entities/update/:id',
				type: 'PUT',
			},
		},
		{
			sourceRoute: '/scp/v1/entities/delete',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entities/delete',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/entities/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/entities/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/details/',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/details/',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/details/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/cloud-services/file/fetchJsonFromCloud',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/cloud-services/file/fetchJsonFromCloud',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/reviewerList',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/reviewerList',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/reviewerList',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/reviewerList',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/update/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/permissions/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/permissions/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/permissions/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/permissions/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/permissions/getPermissions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/permissions/getPermissions',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/permissions/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/permissions/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/modules/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/modules/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/modules/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/modules/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/modules/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/modules/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/modules/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/modules/delete/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/certificates/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/certificates/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/certificates/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/certificates/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/certificates/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/certificates/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/resource/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/resource/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/resource/browseExisting',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			requiresCustomHandling: true,
			targetRoute: {
				paths: [
					{
						baseUrl: process.env.PROJECT_SERVICE_BASE_URL,
						path: '/project/v1/admin/dbFind/projectTemplates',
						type: 'POST',
					},
					{
						baseUrl: process.env.SURVEY_SERVICE_BASE_URL,
						path: '/survey/v1/admin/dbFind/solutions',
						type: 'POST',
					},
				],
				functionName: 'fetchResources',
			},
		},
		{
			sourceRoute: '/scp/v1/resource/upForReview',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/resource/upForReview',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/role-permission-mapping/delete/:role_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/role-permission-mapping/delete/:role_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/role-permission-mapping/create/:role_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/role-permission-mapping/create/:role_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/role-permission-mapping/list',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/role-permission-mapping/list',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/submitForReview/',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/submitForReview/',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/projects/submitForReview/:resource_id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/submitForReview/:resource_id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/comments/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/comments/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/comments/update',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/comments/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/comments/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/comments/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/comments/update/:id',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/comments/update/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/reviews/update/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/reviews/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/reviews/start/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/reviews/start/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/reviews/approve/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/reviews/approve/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/reviews/rejectOrReport/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/reviews/rejectOrReport/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/cloud-services/file/getSignedUrl',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/cloud-services/file/getSignedUrl',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/cloud-services/file/getDownloadableUrl',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/cloud-services/file/getDownloadableUrl',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/resource/getPublishedResources',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/resource/getPublishedResources',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/rollouts/getDataManagers',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/rollouts/getDataManagers',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/rollouts/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/rollouts/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/rollouts/update/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/rollouts/update/:id',
				type: 'DELETE',
			},
		},
		{
			sourceRoute: '/scp/v1/rollouts/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/rollouts/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/rollouts/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/rollouts/details/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/rollouts/publish/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/rollouts/publish/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/resource/publishCallback',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/resource/publishCallback',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/update',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/update/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/update/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/addResources/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/addResources/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/removeResources/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/removeResources/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/details/:id',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/submitForReview/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/submitForReview/:id',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/getProgramManagers',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/getProgramManagers',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scp/v1/programs/publish/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/programs/publish/:id',
				type: 'GET',
			},
		},
		{
            sourceRoute: "/scp/health",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/health",
                type: "GET"
            },
			service:"scp"
        },
		{
			sourceRoute: '/scp/v1/resource/getDeepLink',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/resource/getDeepLink',
				type: 'GET',
			},
		},
	],
}
