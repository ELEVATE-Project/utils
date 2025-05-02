const routesConfig = require('../constants/routes')
const surveyController = require('./survey')
const orchestrationHandler = async (req, res, responses) => {
	console.log(req.targetPackages, req.inSequence, req.orchestrated, req.sourceRoute, responses)
	console.log(req.body)
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await surveyController[selectedRouteConfig.targetRoute.functionName](req, res, responses)
}

const orchestrationController = {
	orchestrationHandler,
}
module.exports = orchestrationController