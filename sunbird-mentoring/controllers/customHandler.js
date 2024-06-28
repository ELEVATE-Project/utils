const routesConfig = require('../constants/routes')
const mentoringController = require('../controllers/mentoring')

const customHandler = async (req, res) => {
	const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await mentoringController[selectedRouteConfig.targetRoute.functionName](req, res, selectedRouteConfig)
}

const customHandlerController = {
	customHandler,
}
module.exports = customHandlerController
