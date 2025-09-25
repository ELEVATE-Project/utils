const routesConfig = require('../constants/routes')
const projectController = require('../controllers/project')

const customHandler = async (req, res) => {
    const selectedRouteConfig = routesConfig.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
    return await projectController[selectedRouteConfig.targetRoute.functionName](req, res, selectedRouteConfig)
}

const customHandlerController = {
    customHandler,
}
module.exports = customHandlerController
