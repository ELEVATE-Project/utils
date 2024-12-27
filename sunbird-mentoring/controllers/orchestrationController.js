const routesConfig = require('../constants/routes')
const mentoringController = require('../controllers/mentoring')
const orchestrationHandler = async (req, res, responses) => {
	console.log(req.targetPackages, req.inSequence, req.orchestrated, req.sourceRoute, responses)
	console.log(req.body)
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	if(selectedRouteConfig.service){
		console.log("selectedRouteConfig.service" ,selectedRouteConfig.service)
		req['baseUrl'] = process.env[`${selectedRouteConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		console.log("orch req['baseUrl']" ,req['baseUrl'])
	}
	
	return await mentoringController[selectedRouteConfig.targetRoute.functionName](
		req,
		res,
		responses,
		selectedRouteConfig
	)
}

const orchestrationController = {
	orchestrationHandler,
}
module.exports = orchestrationController
