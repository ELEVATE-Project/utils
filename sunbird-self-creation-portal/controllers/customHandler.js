const routesConfig = require('../constants/routes')
const scpController = require('./scp')

const customHandler = async (req, res) => {
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await scpController[selectedRouteConfig.targetRoute.functionName](req, res, selectedRouteConfig)
}

const customHandlerController = {
	customHandler,
}
module.exports = customHandlerController
