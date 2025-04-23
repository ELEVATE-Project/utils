/**
 * name : controllers/project.js
 * author : Adithya Dinesh
 * Date : 22-Aug-2024
 * Description : Orchestration controller for project
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
const {convertIdsToString} = require('../utils/integerToStringConverter')
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
const readUserTitle = async (req,res,selectedConfig)=>{
	try {

		
		if(selectedConfig.service){
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]

		}		
		const parameterisedRoute = req.params.id ? selectedConfig.targetRoute.path.replace('/:id', `/${req.params.id}`) : selectedConfig.targetRoute.path;
		let headers
	
		if (req.params.id) {
			headers = {
			'X-auth-token': req.headers['x-auth-token'],
			'Content-Type': 'application/json',
			}
		}		

		let response = await requesters.get(req.baseUrl, parameterisedRoute, headers)
		let responseWithTranslation = await readUserServiceTitle(response,req.headers['x-auth-token'],req.query.language)
		
		return res.json(responseWithTranslation)
	} catch (error){
		console.error('Error fetching user title:', error);
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}


const readUserServiceTitle = async (targetedRoleResponse,authToken,languageCode)=>{
	try {
		
		let InterfaceBaseUrl = "http://localhost:" + process.env.APPLICATION_PORT +"/"

		if(languageCode && languageCode !== common.ENGLISH_LANGUGE_CODE){
			parameterisedRoute = "user/v1/user-role/list?language=" + `${languageCode}`

		}else {
			parameterisedRoute = "user/v1/user-role/list"
		}		
		let headers 

			headers = {
			'X-auth-token': 'bearer ' + authToken,
			'Content-Type': 'application/json',
			}
		let response = await requesters.get(InterfaceBaseUrl, parameterisedRoute, headers)

		const idToLabelMap = new Map();
		for (const roleData of response.result.data) {
		  idToLabelMap.set(roleData.id, roleData.label);
		}
	
		// Update the label in targetedRoleResponse based on matching id
		targetedRoleResponse.result = targetedRoleResponse.result.map(role => {
		  const roleId = parseInt(role.value); // Convert string to number for comparison
		  if (idToLabelMap.has(roleId)) {
			return {
			  ...role,
			  label: idToLabelMap.get(roleId) // Replace the label
			};
		  }
		  return role; // No change if id not found
		});		
		return targetedRoleResponse
	} catch (error){
		console.error('Error fetching user title:', error);
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

const projectController = {
	fetchProjectTemplates,
	projectsList,
	readUser,
	readOrganization,
	readUserTitle
}

module.exports = projectController
