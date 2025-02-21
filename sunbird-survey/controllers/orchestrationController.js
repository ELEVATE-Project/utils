const routesConfig = require('../constants/routes')
const surveyController = require('../controllers/survey')
const orchestrationHandler = async (req, res, responses) => {
	console.log(req.service, req.targetPackages, req.inSequence, req.orchestrated, req.sourceRoute, responses)
	console.log(req.body)
	const selectedRouteConfig = routesConfig.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)
	if(selectedRouteConfig && selectedRouteConfig.service){
		req['baseUrl'] = process.env[`${selectedRouteConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
	}
	return await surveyController[selectedRouteConfig.targetRoute.functionName](req, res, responses)
}

const orchestrationController = {
	orchestrationHandler,
}
module.exports = orchestrationController
