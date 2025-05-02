const routesConfig = require('../constants/routes')
const userController = require('./user')

const customHandler = async (req, res) => {
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await userController[selectedRouteConfig.targetRoute.functionName](req, res, selectedRouteConfig)
}

const customHandlerController = {
	customHandler,
}
module.exports = customHandlerController

