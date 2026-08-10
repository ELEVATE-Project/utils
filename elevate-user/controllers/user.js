const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')
const {convertIdsToString} = require('../utils/integerToStringConverter')

const createUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body,{
		'device-info': req.headers['device-info'],
	})
}
const reActivateAccount = async (req, res, response) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body)
}
const updateUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	//const filteredRequestBody = requestParser.transformUpdateUserBody(req.body)
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)
}

const entityTypeRead = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
}

const userDetails = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	
	const parameterisedRoute = selectedConfig.targetRoute.path;
	let headers
	if (req.params.id) {
		headers = {
		  'internal_access_token': req.headers['internal_access_token'],
		  'Content-Type': 'application/json',
		}
	  } else {
	    headers = {
		  'Content-Type': 'application/json',
		  'X-auth-token': req.headers['x-auth-token'],
		}
	}

	
	 let response = await requesters.get(req.baseUrl, parameterisedRoute,headers,{})
	  return response

}

const loginUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body,{
		'captcha-token': req.headers['captcha-token'],
		'device-info': req.headers['device-info'],
	})
}

const readOrganization = async (req, res, selectedConfig) => {
	try {
		const parameterisedRoute = req.query.organisation_code ? selectedConfig.targetRoute.path + `?organisation_code=${req.query.organisation_code}` : selectedConfig.targetRoute.path + `?organisation_id=${req.query.organisation_id}`
		let response = await requesters.get(req.baseUrl, parameterisedRoute , {
			'internal_access_token': req.headers['internal_access_token'],
			'Content-Type':'application/json'
		})
	    response.result = convertIdsToString(response.result)
		return res.json(response)
	} catch (error) {
		console.error('Error fetching organization details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const readUser = async (req, res, selectedConfig) => {
	try {

	  const parameterisedRoute = req.params.id ? selectedConfig.targetRoute.path.replace('/:id', `/${req.params.id}`) : selectedConfig.targetRoute.path;
	  let headers
  
	  if (req.params.id) {
		headers = {
		  'internal_access_token': req.headers['internal_access_token'],
		  'Content-Type': 'application/json',
		}
	  } else {
		headers = {
		  'X-auth-token': req.headers['x-auth-token'],
		  'Content-Type': 'application/json',
		}
	  }
    
	  let response = await requesters.get(req.baseUrl, parameterisedRoute, headers)
	  
	  // Extract only the relevant data
	  response.result = convertIdsToString(response.result)
	  return res.json(response)
	} catch (error) {
	  console.error('Error fetching user details:', error);
	  return res.status(500).json({ error: 'Internal Server Error' })
	}
  };
  

  const accountsList = async (req, res, selectedConfig) => {
	try {
		const userIds = req.body.userIds // Extract userIds from the request body
		const excludeDeletedRecords = req.query.exclude_deleted_records === 'true'

		const parameterisedRoute = excludeDeletedRecords 
			? `${selectedConfig.targetRoute.path}?exclude_deleted_records=true` 
			: selectedConfig.targetRoute.path

		const headers = {
			'internal_access_token': req.headers['internal_access_token'],
			'Content-Type': 'application/json',
		}

		const requestBody = { userIds } // Pass the request body
		const accountsListResponse = await requesters.get(req.baseUrl, parameterisedRoute, headers, requestBody)

		accountsListResponse.result = await convertIdsToString(accountsListResponse.result)

		return res.json(accountsListResponse)
	} catch (error) {
		console.error('Error fetching list of user details:', error);
		return res.status(500).json({ error: 'Internal Server Error' });
	}
}


const validateEmails = async (req, res , selectedConfig) => {
	try{
		const emailIds = req.body.emailIds 
		
		const headers = {
			'internal_access_token': req.headers['internal_access_token'],
			'Content-Type': 'application/json',
		}

		const requestBody = { emailIds } // Pass the request body

		const userListResponse = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, requestBody, headers)    
		userListResponse.result = await convertIdsToString(userListResponse.result)
		return res.json(userListResponse)
	} catch (error) {
		console.error('Error fetching user details by email :', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const mentorDetails = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	
	let parameterisedRoute = selectedConfig.targetRoute.path;

	if(req.params.id){
		parameterisedRoute = parameterisedRoute+'/'+req.params.id;
	}
	let	headers = {
		  'Content-Type': 'application/json',
		  'X-auth-token': req.headers['x-auth-token'],
		}

		console.log("parameterisedRoute ---------------",parameterisedRoute);

	
	 let response = await requesters.get(req.baseUrl, parameterisedRoute,headers,{})
	  return response

}

const userController = {
	createUser,
	reActivateAccount,
	updateUser,
	entityTypeRead,
	loginUser,
	readOrganization,
	readUser,
	accountsList,
	validateEmails,
	userDetails,
	mentorDetails
}

module.exports = userController
