const routesConfig = require('../constants/routes')
const mentoringController = require('../controllers/mentoring')
const orchestrationHandler = async (req, res, responses) => {

	console.log(req.service,req.targetPackages, req.inSequence, req.orchestrated, req.sourceRoute, responses)
	console.log(req.body)

	const selectedRouteConfig = routesConfig.routes.find((obj) =>{
		 if (req.service === obj.service && obj.sourceRoute === req.sourceRoute) {
			return obj;
		} 
		}
	)
	
	if(selectedRouteConfig && selectedRouteConfig.service){
		req['baseUrl'] = process.env[`${selectedRouteConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
	}
	return await mentoringController[selectedRouteConfig.targetRoute.functionName](req, res, responses)
}

const orchestrationController = {
	orchestrationHandler,
}
module.exports = orchestrationController
