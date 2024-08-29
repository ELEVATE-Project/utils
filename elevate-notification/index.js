const packageRouter = require('./router')

const getPackageMeta = () => {
	return {
		basePackageName: 'notification',
		packageName: 'elevate-notification',
	}
}

module.exports = {
	packageMeta: getPackageMeta(),
	packageRouter,
}
