const requesters = require('../utils/requester')
const routeConfigs = require('../constants/routes')
const requestParser = require('../utils/requestParser')

const createProfile = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})
}
const updateUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	const filteredRequestBody = requestParser.transformUpdateUserBody(req.body)
	console.log(req.baseUrl, selectedConfig.targetRoute.path, req.headers, filteredRequestBody, 'mentoring request')
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, filteredRequestBody, req.headers)
}
mentoringController = {
	createProfile,
	updateUser,
}

module.exports = mentoringController
