module.exports = {
	routes: [
		{
			sourceRoute: 'v1/account/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/login',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/acceptTermsAndCondition',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/resetPassword',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/generateToken',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/generateOtp',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/logout',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/account/registrationOtp',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/user/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/user/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/user/share',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/userRole/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/form/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/form/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/form/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/cloud-services/file/getSignedUrl',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/admin/deleteUser',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/admin/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/admin/login',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/organization/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/organization/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/organization/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity-type/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity-type/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity-type/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity-type/delete',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity/delete',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: 'v1/entity/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
	],
}