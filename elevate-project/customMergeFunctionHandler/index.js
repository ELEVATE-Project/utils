const projectController = require('../controllers/project')
const mergeHandler = async (result, functionName, packages) => {
	if (typeof projectController[functionName] !== 'function') {
		throw new Error(`Function '${functionName}' not found in projectController`)
	}
	return await projectController[functionName](result)
}
module.exports = mergeHandler