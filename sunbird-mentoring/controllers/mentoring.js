const requesters = require('../utils/requester')
const routeConfigs = require('../constants/routes.js')
const requestParser = require('../utils/requestParser')

const createProfile = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})
}
// const updateMentoringUser = async (req, res, responses, selectedConfig) =>
// 	await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)

// const entityTypeMentoringRead = async (req, res, responses, selectedConfig) =>
// 	await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
// 		'X-auth-token': req.headers['x-auth-token'],
// 	})

const rolePermissions = async (req, res, responses, selectedConfig) =>
	await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})

const profileRead = async (req, res, selectedConfig) => {
	try {
		const targetRoute1 = selectedConfig.targetRoute.paths[0].path
		const targetRoute2 = selectedConfig.targetRoute.paths[1].path

		const userCreateResponse = await requesters.post(req.baseUrl, targetRoute1, {}, req.headers)
	
		if(process.env.DEBUG_MODE == "true"){
			
			console.log("userCreateResponse api respo",userCreateResponse);
			console.log("profileRead create json",JSON.stringify(userCreateResponse));
		}
		if (userCreateResponse.responseCode == 'OK') {
			const mentoringResponse = await requesters.get(req.baseUrl, targetRoute2, {
				'x-authenticated-user-token': req.headers['x-authenticated-user-token'],
			})
			res.json(mentoringResponse)
		} else {

			if(process.env.DEBUG_MODE == "true"){
				console.log("profileRead error create",JSON.stringify(userCreateResponse));
			}
			res.json(userCreateResponse)
		
		}
	} catch (error) {

		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching organization details:', error)
		}
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

const createUser = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'device-info': req.headers['device-info'],
	})
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

		if(process.env.DEBUG_MODE == "true"){
			console.log('RESPONSE:', response)
			console.log('RESPONSE.RESULT:', response?.result)
			// console.log('RESPONSE.RESULT.RESULT:', response?.result?.result)

		}
		const responseData = {
			result: {
				id: response.result.response.id,
				name: response.result.response.orgName,
				related_orgs: [],
			},
		}
		return res.json(responseData)
	} catch (error) {

		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching organization details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processUserResponse = (userResponse) => {

	if(process.env.DEBUG_MODE == "true"){
		console.log("userResponse.result.response.rootOrg.id",userResponse.result.response.rootOrg.id);
	}
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

		if(process.env.DEBUG_MODE == "true"){
			console.log("READ API response status:",userResponse.params.status);
			console.log(" user read API resp ==  ",JSON.stringify(userResponse));
			console.log(" API Response",JSON.stringify(userResponse));
		}
		if (userResponse.params.status == 'FAILED') {

			if(process.env.DEBUG_MODE == "true"){
				console.log("userResponse.params.status ",userResponse.params.status);	
				console.log("userResponse.params.status ",JSON.stringify(userResponse));
			}	
			return res.send(userResponse) 
		}
		const enrollmentResponse = await requesters.get(targetRoute2.baseUrl, targetRoute2.path, req.headers, {
			id: userId,
		})

		if(process.env.DEBUG_MODE == "true"){
			console.log('CALLING COMPETENCY ')
		}

		let competencyIds = []
		if(enrollmentResponse.result && enrollmentResponse.result.courses){
			competencyIds = getCompetencyIds(enrollmentResponse.result.courses || [])

		}
		 
		if(process.env.DEBUG_MODE == "true"){
			console.log('competencyIds ==',competencyIds)
			console.log("userResponse profile response ",userResponse);
		}
		const responseData = processUserResponse(userResponse)
		responseData.result.competency = competencyIds

		if(process.env.DEBUG_MODE == "true"){
			console.log('RESPONSE DATA: ', JSON.stringify(responseData, null, 3))
		}
		responseData.responseCode = 'OK'
		return res.send(responseData)
	} catch (error) {
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const readUserWithToken = async (req, res, selectedConfig) => {
	try {

		if(process.env.DEBUG_MODE == "true"){
			console.log("================== readUserWithToken =======")
		}
		const targetRoute1 = selectedConfig.targetRoute.paths[0].path
		const targetRoute2 = selectedConfig.targetRoute.paths[1]

		let token = req.headers['x-auth-token']
		if (token && token.toLowerCase().startsWith('bearer ')) token = token.slice(7)

		const tokenClaims = jwt.decode(token)
		const userId = tokenClaims.sub.split(':').pop()

		const userResponse = await requesters.get(req.baseUrl,targetRoute1.path, req.headers, {
			id: userId,
		})

		if (userResponse.params.status == 'FAILED') return res.send(userResponse)
		const enrollmentResponse = await requesters.get(targetRoute2.baseUrl, targetRoute2.path, req.headers, {
			id: userId,
		})
		const competencyIds = getCompetencyIds(enrollmentResponse.result.courses || [])
		

		if(process.env.DEBUG_MODE == "true"){
			console.log("================== competencyIds =======",competencyIds)
		}
		let responseData = processUserResponse(userResponse)
		responseData.result.competency = competencyIds



		return res.json(responseData)
	} catch (error) {
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processUserSearchResponse = (content) => {

	if(process.env.DEBUG_MODE == "true"){
		console.log("============ user Details  ====================",content)
	}
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
		if(process.env.DEBUG_MODE == "true"){
			console.log("------- ================ -------",req.body);
		}
		// if (Array.isArray(userIds)) throw Error('req.body.userIds is not an array.')
		body.request.filters.userId = userIds
		const userSearchResponse = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {})
		return res.json(processUserSearchResponse(userSearchResponse.result.response.content))
	} catch (error) {
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const listOrganisation = async (req, res, selectedConfig) => {

	if(process.env.DEBUG_MODE == "true"){
		console.log("req.body list org =========",req.body)
	}
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

		if(process.env.DEBUG_MODE == "true"){		
			console.log('RESPONSE:', response)
			console.log('RESPONSE.RESULT:', response?.result)
			console.log('RESPONSE.RESULT.response.:', response?.result?.response)
			console.log('RESPONSE.RESULT.response.content:', response?.result?.response?.content)
			console.log('RESPONSE.RESULT.content count:', response?.result.response.count)
		}
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
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

mentoringController = {
	createProfile,
	// updateMentoringUser,
	// entityTypeMentoringRead,
	rolePermissions,
	profileRead,
	createUser,
	entityTypeRead,
	loginUser,
	readOrganization,
	readUserById,
	readUserWithToken,
	accountList,
	listOrganisation
}

module.exports = mentoringController
