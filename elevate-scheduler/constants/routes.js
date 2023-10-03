module.exports = {
	routes: [
		{
			sourceRoute: '/scheduler/jobs/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scheduler/jobs/list',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scheduler/jobs/create',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/remove',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scheduler/jobs/remove',
				type: 'POST',
			},
		},
		{
			sourceRoute: '/scheduler/jobs/purge',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/scheduler/jobs/purge',
				type: 'POST',
			},
		},
	],
}
