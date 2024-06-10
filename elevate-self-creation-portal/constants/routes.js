module.exports = {
	routes: [
		{
			sourceRoute: '/scp/v1/permissions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/permissions/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/scp/v1/config/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/config/list',
				type: 'GET'
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
			sourceRoute: '/scp/v1/projects/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/details/:id',
				type: 'GET'
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
				type: 'GET'
			},
		},
		{
			sourceRoute: '/scp/v1/projects/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/scp/v1/projects/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/projects/update/:id',
				type: 'POST'
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
			sourceRoute: '/scp/v1/certificate/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/certificate/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/scp/v1/resource/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/resource/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/scp/v1/comment/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/comment/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/scp/v1/comment/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scp/v1/comment/update',
				type: 'POST'
			},
		},
	],
}
