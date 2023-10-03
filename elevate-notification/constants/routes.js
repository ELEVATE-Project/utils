module.exports = {
	routes: [
		{
			sourceRoute: '/notification/v1/email/send',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/notification/v1/email/send',
				type: 'POST',
			},
		},
	],
}
