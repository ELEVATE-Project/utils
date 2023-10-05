const packageRouter = require('./router')

const getPackageMeta = () => {
	return {
		basePackageName: 'mentoring',
		packageName: 'elevate-mentoring',
	}
}

module.exports = {
	packageMeta: getPackageMeta(),
	packageRouter,
}
