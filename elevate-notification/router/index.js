const { passThroughRequester } = require('../utils/requester')
const { orchestrationHandler } = require('../controllers/orchestrationController')
const packageRouter = async (req, res, responses) => {
	const response = req.orchestrated
		? await orchestrationHandler(req, res, responses)
		: await passThroughRequester(req, res)
	return response
}

module.exports = packageRouter
