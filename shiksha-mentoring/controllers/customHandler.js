const routesConfig = require('../constants/routes')
const mentorController = require('./mentoring')

const customHandler = async (req, res) => {
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

    if(selectedRouteConfig && selectedRouteConfig.service){
		req['baseUrl'] = process.env[`${selectedRouteConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
	}
	return await mentorController[selectedRouteConfig.targetRoute.functionName](req, res, selectedRouteConfig)
}

const customHandlerController = {
	customHandler,
}
module.exports = customHandlerController