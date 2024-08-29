module.exports = {
	routes: [
		{
			sourceRoute: '/scheduler/jobs/create',
			type: 'POST',
			targetRoute: {
				path: '/scheduler/jobs/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/updateDelay',
			type: 'POST',
			targetRoute: {
				path: '/scheduler/jobs/updateDelay',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/remove',
			type: 'POST',
			targetRoute: {
				path: '/scheduler/jobs/remove',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/list',
			type: 'GET',
			targetRoute: {
				path: '/scheduler/jobs/list',
				type: 'GET',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/purge',
			type: 'POST',
			targetRoute: {
				path: '/scheduler/jobs/purge',
				type: 'POST',
			},
		}
	],
}
