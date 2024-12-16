const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')

const createUser = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'device-info': req.headers['device-info'],
	})
}
const updateUser = async (req, res, responses, selectedConfig) => {
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)
}

const entityTypeRead = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
}

const loginUser = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'captcha-token': req.headers['captcha-token'],
		'device-info': req.headers['device-info'],
	})
}

const readOrganization = async (req, res, selectedConfig) => {
	const body = {
		request: {
			organisationId: req.query.organisation_id || req.query.organisation_code,
		},
	}
	try {
		const response = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'],
		})
		console.log('RESPONSE:', response)
		console.log('RESPONSE.RESULT:', response?.result)
		// console.log('RESPONSE.RESULT.RESULT:', response?.result?.result)
		const responseData = {
			result: {
				id: response.result.response.id,
				name: response.result.response.orgName,
				related_orgs: [],
			},
		}
		return res.json(responseData)
	} catch (error) {
		console.error('Error fetching organization details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processUserResponse = (userResponse) => {

	console.log("userResponse.result.response.rootOrg.id",userResponse.result.response.rootOrg.id);
	return {
		result: {
			name: userResponse.result.response.profileDetails.personalDetails.firstname,
			email: userResponse.result.response.profileDetails.personalDetails.primaryEmail,
			user_roles: userResponse.result.response.mentoring?.roles?.map((role) => ({
				title: role.toLowerCase(),
			})),
			id: userResponse.result.response.identifier,
			organization_id: userResponse.result.response.rootOrg.id,
			organization:{
				id: userResponse.result.response.rootOrg.id,
				name: userResponse.result.response.rootOrg.orgName
				// code: "sl"
			},
			phone: userResponse.result.response.profileDetails.personalDetails.mobile,
			competency: [],
			language: userResponse.result.response.profileDetails.personalDetails.domicileMedium ?
			 (userResponse.result.response.profileDetails.personalDetails?.domicileMedium).replace(/[^a-zA-Z0-9]/g, "_") : undefined,
			designation: Array.isArray(userResponse.result.response.profileDetails?.professionalDetails)
				? [(userResponse.result.response.profileDetails.professionalDetails[0]?.designation).replace(/[^a-zA-Z0-9]/g, "_")]
				: undefined,
			image: userResponse.result.response.profileDetails.profileImageUrl ? userResponse.result.response.profileDetails.profileImageUrl : undefined
		},
	}
}

const getCompetencyIds = (courses) => {
	return courses.reduce((competencyIds, course) => {
		if (course.status == 2 && course.content?.competencies_v5) {
			course.content.competencies_v5.forEach((competency) => {
				competencyIds.push(`${competency.competencySubThemeId}`)
			})
		}
		return competencyIds
	}, [])
}

const readUserById = async (req, res, selectedConfig) => {
	const userId = req.params.id
	try {
		console.log('read by userid');
		const targetRoute1 = selectedConfig.targetRoute.paths[0].path
		const targetRoute2 = selectedConfig.targetRoute.paths[1]

		const userResponse = await requesters.get(req.baseUrl, targetRoute1, req.headers, {
			id: userId,
		})

		console.log("READ API response status:",userResponse.params.status);
		console.log(" user read API resp ==  ",JSON.stringify(userResponse));
		console.log(" API Response",JSON.stringify(userResponse));
		if (userResponse.params.status == 'FAILED') {
			console.log("userResponse.params.status ",userResponse.params.status);	
			console.log("userResponse.params.status ",JSON.stringify(userResponse));	
			return res.send(userResponse) 
		}
		const enrollmentResponse = await requesters.get(targetRoute2.baseUrl, targetRoute2.path, req.headers, {
			id: userId,
		})
		console.log('CALLING COMPETENCY ')

		let competencyIds = []
		if(enrollmentResponse.result && enrollmentResponse.result.courses){
			competencyIds = getCompetencyIds(enrollmentResponse.result.courses || [])

		}
		  
		console.log('competencyIds ==',competencyIds)
		console.log("userResponse profile response ",userResponse);
		const responseData = processUserResponse(userResponse)
		responseData.result.competency = competencyIds

		console.log('RESPONSE DATA: ', JSON.stringify(responseData, null, 3))
		responseData.responseCode = 'OK'
		return res.send(responseData)
	} catch (error) {
		console.error('Error fetching user details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const readUserWithToken = async (req, res, selectedConfig) => {
	try {

		console.log("================== readUserWithToken =======")

		const targetRoute1 = selectedConfig.targetRoute.paths[0].path
		const targetRoute2 = selectedConfig.targetRoute.paths[1]

		let token = req.headers['x-auth-token']
		if (token && token.toLowerCase().startsWith('bearer ')) token = token.slice(7)

		const tokenClaims = jwt.decode(token)
		let userId = tokenClaims.sub.split(':').pop()

		if(req.params.id){
			 userId = req.params.id
		}

		const userResponse = await requesters.get(req.baseUrl,targetRoute1.path, req.headers, {
			id: userId,
		})

		if (userResponse.params.status == 'FAILED') return res.send(userResponse)
		const enrollmentResponse = await requesters.get(targetRoute2.baseUrl, targetRoute2.path, req.headers, {
			id: userId,
		})
		const competencyIds = getCompetencyIds(enrollmentResponse.result.courses || [])
		

		console.log("================== competencyIds =======",competencyIds)

		let responseData = processUserResponse(userResponse)
		responseData.result.competency = competencyIds



		return res.json(responseData)
	} catch (error) {
		console.error('Error fetching user details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processUserSearchResponse = (content) => {

	console.log("============ user Details  ====================",content)
	return {
		result: content.map((user) => {
			console.log(user)
			return {
				id: user.id,
				image: user?.profileDetails?.profileImageUrl,
				name: user?.profileDetails?.personalDetails?.firstname,
				organization: {
					id: user?.rootOrgId,
					name:user?.rootOrgName
				},
				email: user?.profileDetails?.personalDetails?.primaryEmail
			}
		}),
	}
}

const accountList = async (req, res, selectedConfig) => {
	const body = {
		request: {
			filters: {
				userId: [],
			},
		},
	}
	try {
		const userIds = req.body.userIds

		console.log("------- ================ -------",req.body);

		// if (Array.isArray(userIds)) throw Error('req.body.userIds is not an array.')
		body.request.filters.userId = userIds
		const userSearchResponse = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {})
		return res.json(processUserSearchResponse(userSearchResponse.result.response.content))
	} catch (error) {
		console.error('Error fetching user details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const listOrganisation = async (req, res, selectedConfig) => {

	console.log("req.body list org =========",req.body)
	const body = {
		request: {
			filters: {
				id: req.body.organizationIds,
			},
			sortBy: {
				orgName: "asc"
			},
		},
	}
	try {

		const response = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'],
		})

		
		console.log('RESPONSE:', response)
		console.log('RESPONSE.RESULT:', response?.result)
		console.log('RESPONSE.RESULT.response.:', response?.result?.response)
		console.log('RESPONSE.RESULT.response.content:', response?.result?.response?.content)
		console.log('RESPONSE.RESULT.content count:', response?.result.response.count)

		let orgInfo = [];
		response.result.response.content.map(async function(orgDetails){

			orgInfo.push({
				code : orgDetails.orgCode,
				name: orgDetails.orgName,
				id : orgDetails.id
			})
		});
		const responseData = {
			"responseCode": "OK",
			"message": "Organization fetched successfully.",
			result: orgInfo
		}
		return res.json(responseData);
	} catch (error) {
		console.error('Error fetching user details:', error)
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

const userController = {
	createUser,
	updateUser,
	entityTypeRead,
	loginUser,
	readOrganization,
	readUserById,
	readUserWithToken,
	accountList,
	listOrganisation,
	mentorDetails,
	userDetails
}

module.exports = userController
