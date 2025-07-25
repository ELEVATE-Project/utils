/**
 * name : controllers/project.js
 * author : Adithya Dinesh
 * Date : 22-Aug-2024
 * Description : Orchestration controller for Samiksha service
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
const {convertIdsToString} = require('../utils/integerToStringConverter')

/**
 * Fetch resources from Samiksha service.
 * @name fetchSamikshaTemplates
 * @param {Object} req
 * @param {Object} res
 * @param {Object} responses  
 * @returns {JSON} - List of resources
 */
/**
 * req.body = {
 * 		organization_id : 1,
 * 		resourceType : ['survey','projects']
 * }
 */


const fetchObserbationAndSurvey = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	let response = {result: {data: [],count: 0}}
	let proceedToCallProjectService = false
	let resp = {}
	const max_limit = process.env.RESOURCE_MAX_FETCH_LIMIT ? parseInt(process.env.RESOURCE_MAX_FETCH_LIMIT, 10) : 1000
	// request body for samiksha service
	let reqBody = { query : { } }

	
	if(req.body){
		// check if body has key resourceType else assign []
		const resourceType = req?.body?.resourceType || [];
		if (Array.isArray(resourceType) && resourceType.length > 0) {
			// if resource type have type = survey , observations or observation_with_rubrics proceed to call api 
		    proceedToCallProjectService = resourceType.includes(common.RESOURCE_TYPE_OBSERVATION) || resourceType.includes(common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS) || resourceType.includes(common.RESOURCE_TYPE_SURVEY);
			
			// body queries for samiksha service - based on specific resource type
			if(req?.body?.resourceType.includes(common.RESOURCE_TYPE_OBSERVATION)){
				body.query.type = common.RESOURCE_TYPE_OBSERVATION
				body.query.isRubricDriven = false
			}else if(req?.body?.resourceType.includes(common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS)){
				body.query.type = common.RESOURCE_TYPE_OBSERVATION
				body.query.isRubricDriven = true
			}else if(req?.body?.resourceType.includes(common.RESOURCE_TYPE_SURVEY)){
				body.query.type = common.RESOURCE_TYPE_SURVEY
			}
		}else if(Array.isArray(resourceType) || resourceType.length == 0){
			// if resource type have type = empty call API because the client is expecting all type of resources 
			proceedToCallProjectService = true	
		}

	}
	if(proceedToCallProjectService && req.headers[common.AUTH_TOKEN_KEY]){
		// body queries for samiksha service - generic
		reqBody.query.isReusable = true
		reqBody.query.isDeleted = false
		reqBody.query.isAPrivateProgram = false
		reqBody.query.status = common.RESOURCE_STATUS_ACTIVE
		reqBody.projection= common.RESOURCE_PROJECTION_FIELDS
		reqBody.limit = max_limit
		// replace the word bearer if token has it 
		const x_auth_token = req.headers[common.AUTH_TOKEN_KEY].replace(/^(Bearer|bearer)\s*/, '');
		let header = {
			'internal-access-token' : req.headers['internal_access_token'],
			'Content-Type' : 'application/json',
			'X-auth-token' : x_auth_token
		}

		if (req?.body && req.body?.search) {
			reqBody.query.name = {
				"$regex": req.body.search,
				"$options": 'i'
			}
		}

		// fetch data from the service 
		resp = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, reqBody , header)
	}
	
	if (resp?.result?.length > 0) {
		let data = []
		// transform the result to fit in the service 
		resp.result.reduce((accumulateResource,resources) => {
			accumulateResource = {}
			for(let resource in resources){
				let newKey = common.RESOURCE_TRANSFORM_KEYS[resource] || resource
				accumulateResource[newKey] = resources[resource]
			}
			// check if resource is an observation with rubrics 
			// if it is observation with rubrics update the type value 
			if(resources[common.RESOURCE_TYPE_KEY] == common.RESOURCE_TYPE_OBSERVATION && resources[common.RESOURCE_IS_RUBRIC_DRIVEN_KEY] == true) {
				accumulateResource[common.RESOURCE_TYPE_KEY] = common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS
			}
			data.push(accumulateResource)
		},null)	

		response.result.data = data
	}
	
	return response
}
const readUser = async (req, res, selectedConfig) => {
	try {
		if(selectedConfig.service){
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

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
		return res.json(response)
	} catch (error) {
		console.error('Error fetching user details:', error);
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}
const readOrganization = async (req, res, selectedConfig) => {
	try {
		const parameterisedRoute = req.query.organisation_code ? selectedConfig.targetRoute.path + `?organisation_code=${req.query.organisation_code}` : selectedConfig.targetRoute.path + `?organisation_id=${req.query.organisation_id}`
		if(selectedConfig.service){
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
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

const fetchPrograms = async (req, res) => {
	const selectedConfig = routeConfigs.routes.find((obj) => req.service === obj.service && obj.sourceRoute === req.sourceRoute)
	let targetedRoutePath = selectedConfig.targetRoute.path
	let params = req.params;
	
	targetedRoutePath = targetedRoutePath.replace('/:id', `/${params.id}`)

	return await requesters.post(req.baseUrl, targetedRoutePath, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
}

const surveyController = {
	fetchObserbationAndSurvey,
	readUser,
	readOrganization,
	fetchPrograms
}

module.exports = surveyController

