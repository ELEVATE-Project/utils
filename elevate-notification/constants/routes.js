module.exports = {
	routes: [
		{
			sourceRoute: 'notification/v1/email/send',
			type: 'POST',
			targetRoute: {
				path: 'notification/v1/email/send',
				type: 'POST',
			},
		}
	],
}
