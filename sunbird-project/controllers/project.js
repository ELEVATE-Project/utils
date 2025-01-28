/**
 * name : controllers/project.js
 * author : Adithya Dinesh
 * Date : 22-Aug-2024
 * Description : Orchestration controller for project
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
/**
 * Fetch project templates from projects service.
 * @name fetchProjectTemplates
 * @param {Object} req
 * @param {Object} res
 * @param {Object} responses  
 * @returns {JSON} - List of project templates
 */
/**
 * req.body = {
 * 		organization_id : 1,
 * 		resourceType : ['survey','projects']
 * }
 */

const fetchProjectTemplates = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)

	let response = { result: { data: [], count: 0 } }
	let proceedToCallProjectService = false
	let resp = {}

	// fetch the max limit from the env file for the DB Find API
	const max_limit = process.env.RESOURCE_MAX_FETCH_LIMIT ? parseInt(process.env.RESOURCE_MAX_FETCH_LIMIT, 10) : 1000

	if (req.body) {
		// check if body has key resourceType else assign []
		const resourceType = req?.body?.resourceType || [];
		if (Array.isArray(resourceType) && resourceType.length > 0) {
			// if resource type have type = projects proceed to call api 
			proceedToCallProjectService = resourceType.includes(common.RESOURCE_TYPE_PROJECT);
		}else if(resourceType.length == 0){
			// if resource type have type = empty call API because the client is expecting all type of resources 
			proceedToCallProjectService = true	
		}
	}

	if (proceedToCallProjectService && req.headers[common.AUTH_TOKEN_KEY]) {
		let reqBody = {
			"query": {
				"status": common.PROJECT_STATUS_PUBLISHED
			},
			"projection": common.PROJECT_PROJECTION_FIELDS,
			"limit": max_limit
		}

		// custom header 
		const header = {}
		// replace the word bearer if token has it 
		header[common.AUTH_TOKEN_KEY] = req.headers[common.AUTH_TOKEN_KEY].replace(/^(Bearer|bearer)\s*/, '')
		header[common.INTERNAL_ACCESS_TOKEN] = req.headers['internal_access_token']
		header[common.HEADER_CONTENT_TYPE] = 'application/json'

		if (req?.body && req.bod?.search) {
			reqBody.query.title = {
				"$regex": req.body.search,
				"$options": 'i'
			}
		}
		resp = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, reqBody , header)
	}

	if (resp?.result?.length > 0) {
		let data = []
		// transform the result to fit in the service 
		resp.result.reduce((accumulateResource, projects) => {
			accumulateResource = {}
			for (let project in projects) {
				let newKey = common.PROJECT_TRANSFORM_KEYS[project] || project
				accumulateResource[newKey] = projects[project]
			}
			accumulateResource['type'] = common.RESOURCE_TYPE_PROJECT
			data.push(accumulateResource)
		}, null)

		response.result.data = data
	}

	return response
}

const projectsList = async (req, res) => {
	const selectedConfig = routeConfigs.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)
	let targetedRoutePath = selectedConfig.targetRoute.path
	// Add the query params to the request call
	Object.keys(req.query).map((key) => {
		if(targetedRoutePath.includes('?')){
			targetedRoutePath = targetedRoutePath + `&${key}=${req.query[key]}`
		}else{
			targetedRoutePath = targetedRoutePath + `?${key}=${req.query[key]}`
		}
	})
	// Set status=completed in query based on req.body
	if("filter" in req.body && req.body.filter == "submittedCount"){
		if(targetedRoutePath.includes('?')){
			targetedRoutePath = targetedRoutePath + `&status=completed`
		}else{
			targetedRoutePath = targetedRoutePath + `?status=completed`
		}
		delete req.body["filter"]
	}
	return await requesters.post(req.baseUrl, targetedRoutePath, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
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

const createLocationReqBody = async (req, res) => {
	const selectedConfig = routeConfigs.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)
	let targetedRoutePath = selectedConfig.targetRoute.path

	let bodyData = {}
	bodyData["request"] = {}
	bodyData["request"]["filters"] = {}
	if("_id" in req.body){
		bodyData["request"]["filters"] = {
			"id" : req.body._id
		}
	}
	if("code" in req.body){
		bodyData["request"]["filters"] = {
			"code" : req.body.code
		}
	}
	return await requesters.post(req.baseUrl, targetedRoutePath, bodyData, {
		'Authorization': `Bearer ${req.headers['x-auth-token']}`	
	})
}

const projectController = {
	fetchProjectTemplates,
	projectsList,
	readUserById,
	readUserWithToken,
	createLocationReqBody
}

module.exports = projectController
