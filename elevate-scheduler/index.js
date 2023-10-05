const packageRouter = require('./router')

const getPackageMeta = () => {
	return {
		basePackageName: 'scheduler',
		packageName: 'elevate-scheduler',
	}
}

module.exports = {
	packageMeta: getPackageMeta(),
	packageRouter,
}
