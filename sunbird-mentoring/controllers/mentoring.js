const requesters = require('../utils/requester')
const routeConfigs = require('../constants/routes')
const requestParser = require('../utils/requestParser')

const createProfile = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})
}
const updateUser = async (req, res, responses, selectedConfig) =>
	await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)

const entityTypeRead = async (req, res, responses, selectedConfig) =>
	await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})

const rolePermissions = async (req, res, responses, selectedConfig) =>
	await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})

const profileRead = async (req, res, selectedConfig) => {
	try {
		const targetRoute1 = selectedConfig.targetRoute.paths[0].path
		const targetRoute2 = selectedConfig.targetRoute.paths[1].path

		const userCreateResponse = await requesters.post(req.baseUrl, targetRoute1, {}, req.headers)
		console.log("userCreateResponse api respo",userCreateResponse);
		console.log("profileRead create json",JSON.stringify(userCreateResponse));
		if (userCreateResponse.responseCode == 'OK') {
			const mentoringResponse = await requesters.get(req.baseUrl, targetRoute2, {
				'x-authenticated-user-token': req.headers['x-authenticated-user-token'],
			})
			res.json(mentoringResponse)
		} else {
			console.log("profileRead error create",JSON.stringify(userCreateResponse));
			res.json(userCreateResponse)
		}
	} catch (error) {
		console.error('Error fetching organization details:', error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
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
	profileRead,
	mentorDetails,
	mentoringProfile
}

module.exports = mentoringController
