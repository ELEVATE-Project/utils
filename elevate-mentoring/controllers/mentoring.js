const requesters = require('../utils/requester')
const routeConfigs = require('../constants/routes')
const requestParser = require('../utils/requestParser')

const createProfile = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	req.body.skipValidation = true
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})
}
const updateUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	//const filteredRequestBody = requestParser.transformUpdateUserBody(req.body)
	console.log(req.baseUrl, selectedConfig.targetRoute.path, req.headers, req.body, 'mentoring request')
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)
}

const entityTypeRead = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
}

const rolePermissions = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path,req.body,{
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})
}

const mentorDetails = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	
	const parameterisedRoute = req.params.id ? selectedConfig.targetRoute.path.replace('/:id', `/${req.params.id}`) : selectedConfig.targetRoute.path;
	  let headers
  
	  if (req.params.id) {
		headers = {
		  'Content-Type': 'application/json',
		  'X-auth-token': req.headers['x-auth-token'],
		}
	  }

	  console.log("response ============ headers  ",headers);
	
	 let response = await requesters.get(req.baseUrl, parameterisedRoute,headers,{})
	  return response

}

const mentoringProfile = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	
	const parameterisedRoute = selectedConfig.targetRoute.path;
	  let headers
  
		headers = {
		  'Content-Type': 'application/json',
		  'X-auth-token': req.headers['x-auth-token'],
		}
	  
	 let response = await requesters.get(req.baseUrl, parameterisedRoute,headers,{})
	  return response

}

mentoringController = {
	createProfile,
	updateUser,
	entityTypeRead,
	rolePermissions,
	mentorDetails,
	mentoringProfile
}

module.exports = mentoringController
