const routesConfig = require('../constants/routes')
// const notificationController = require('../controllers/notification')
const orchestrationHandler = async (req, res, responses) => {
	console.log(req.targetPackages, req.inSequence, req.orchestrated, req.sourceRoute, responses)
	console.log(req.body)
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	// return await notificationController[selectedRouteConfig.targetRoute.functionName](req, res, responses)
}

const orchestrationController = {
	orchestrationHandler,
}
module.exports = orchestrationController
