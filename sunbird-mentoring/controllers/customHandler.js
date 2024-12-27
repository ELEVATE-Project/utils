const routesConfig = require('../constants/routes')
const mentoringController = require('../controllers/mentoring')

const customHandler = async (req, res) => {
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	if(selectedRouteConfig.service){
		req['baseUrl'] = process.env[`${selectedRouteConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
	}
	return await mentoringController[selectedRouteConfig.targetRoute.functionName](req, res, selectedRouteConfig)
}

const customHandlerController = {
	customHandler,
}
module.exports = customHandlerController
