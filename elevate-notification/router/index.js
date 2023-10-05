const { passThroughRequester } = require('../utils/requester')

const packageRouter = async (req, res) => {
	const response = await passThroughRequester(req, res)
	return response
}

module.exports = packageRouter
