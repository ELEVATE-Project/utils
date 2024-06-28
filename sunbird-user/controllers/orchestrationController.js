const routesConfig = require('../constants/routes')
const userController = require('../controllers/user')
const orchestrationHandler = async (req, res, responses) => {
	console.log(req.targetPackages, req.inSequence, req.orchestrated, req.sourceRoute, responses)
	console.log(req.body)
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await userController[selectedRouteConfig.targetRoute.functionName](req, res, responses, selectedRouteConfig)
}

const orchestrationController = {
	orchestrationHandler,
}
module.exports = orchestrationController
