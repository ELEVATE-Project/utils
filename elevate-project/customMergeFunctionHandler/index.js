const projectController = require('../controllers/project')
const mergeHandler = async (result, functionName, packages) => {
	return await projectController[functionName](result)
}
module.exports = mergeHandler