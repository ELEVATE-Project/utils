/**
 * name : controllers/project.js
 * author : Adithya Dinesh
 * Date : 22-Aug-2024
 * Description : Orchestration controller for project
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
const {matchPathsAndExtractParams} = require('../utils/patternMatcher')
const {pathParamSetter} = require('../utils/pathParamSetter')
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

const fetchLocationDetails = async (req, res, selectedConfig) => {
	try{
		// validate the body, if body is not present throw error
		if(!(Object.keys(req["body"]).length > 0) || !(Object.keys(req["body"]["query"]).length>0)){
			if(process.env.DEBUG_MODE == "true"){
				console.log("req.body cannot be empty")
			}
			res.status(500).json("Internal Server Error")
		}

		// if passed api config has service value defined. We are getting the baseURl of that service from env of Interface service
		if(selectedConfig.service){
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
		let targetedRoutePath = selectedConfig.targetRoute.path
		const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(targetedRoutePath, params)

		// prepare req.body to match sunbird location API req.body
		let bodyData = {}
		bodyData["request"] = {}
		bodyData["request"]["filters"] = {}
		if("_id" in req.body.query){
			if(typeof req.body.query._id == "object"){
				bodyData["request"]["filters"] = {
					"id" : req.body.query._id["$in"]
				}
			}
			else{
				bodyData["request"]["filters"] = {
					"id" : req.body.query._id
				}
			}
		}
		if("code" in req.body.query){
			if(typeof req.body.query.code == "object"){
				bodyData["request"]["filters"] = {
					"code" : req.body.query.code["$in"]
				}
			}
			else{
				bodyData["request"]["filters"] = {
					"code" : req.body.query.code
				}
			}
		}

		if ("metaInformation.name" in req.body.query) {
			bodyData["request"]["filters"] = {
				"name": req.body.query["metaInformation.name"]
			};
		}
		

		if ("entityType" in req.body.query) {
				bodyData["request"]["filters"]["type"] = req.body.query.entityType["$in"];
			
		}

		// fetch location details
		let locationDetails = await requesters.post(req.baseUrl, targetRoute, bodyData, {
			"Authorization": `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
		})


		// confirm success response
		if (locationDetails.responseCode === 'OK') {

			locationDetails["result"] = locationDetails.result.response
			locationDetails["status"] = 200

			// modify the response to be compatible with EP
			if(locationDetails.result.length > 0){
				locationDetails.result.map(location => {
					location["_id"] = location.id
					location["registryDetails"] = {
						"code" : location.code
					}
					location['metaInformation']={
						'name' : location.name
					}
					location["entityType"] = location.type
				})
			}
		}
		else{
			if(process.env.DEBUG_MODE == "true"){
				console.log("location API error",JSON.stringify(locationDetails))
			}
			res.json(locationDetails)
		}

		res.json(locationDetails)

	}  catch (error) { 
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching location details:', error)
		}
		res.status(500).json({ error: 'Internal Server Error' })

	}
}
/*The profileRead API retrieves and transforms user profile information from an external service (e.g., Sunbird's user service). 
The function processes and restructures the data into a format 
suitable for the Elevate Project frontend application.*/

const profileRead = async (req, res, selectedConfig) => {
	try {
		// if passed api config has service value defined. We are getting the baseURl of that service from env of Interface service
		if(selectedConfig.service){
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
		let targetedRoutePath = selectedConfig.targetRoute.path
		const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(targetedRoutePath, params)
		
		// Fetch user profile details
		let userProfileData = await requesters.get(req.baseUrl, targetRoute, {
			"Authorization": `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
			"x-authenticated-user-token": req.headers["x-auth-token"]
		}, req.body)
		
		// confirm success response
		if (userProfileData.responseCode === 'OK') {
			
			userProfileData["result"] = userProfileData.result.response
		
			//generate role data for EP
			if (userProfileData.result.profileUserTypes && userProfileData.result.profileUserTypes.length > 0) {
				
				// Create a new user_roles array with transformed data
				userProfileData.result.user_roles = userProfileData.result.profileUserTypes.map(ele => {
					return {
						title: ele.subType && ele.subType !== "" ? ele.subType : ele.type // map subType to title if not empty. if it is empty take value from type
					};
				});
				
			}
		
			// generate location data of user for EP
			if (userProfileData.result.profileLocation && userProfileData.result.profileLocation.length > 0) {

				// if profile location is available get ids of location and fetch complete data of location by calling sunbird's location search API
				const locationIds = userProfileData.result.profileLocation.map(location => location.id)
				
				// Create location search api call request body
				const bodyData = {
					request: {
						filters: {
							id: locationIds
						}
					}
				};
				
				// Call location details fetcher
				const locationData = await getLocationDetails(bodyData, req.baseUrl)
				if (locationData.length > 0) {
					locationData.forEach(location => {
						// Set each location's type as a key in userProfileData.result with the id as value
						userProfileData.result[location.type] = {
							value: location.id,
							label: location.name
						};
					});
				}
				
			}

			// generate name for EP
			userProfileData.result["name"] = userProfileData.result.userName
			res.json(userProfileData)
		} else {
	
			if(process.env.DEBUG_MODE == "true"){
				console.log("profileRead error",JSON.stringify(userProfileData));
			}
			res.json(userProfileData)
		
		}

	}  catch (error) { 
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching user details:', error)
		}
		res.status(500).json({ error: 'Internal Server Error' })

	}
}

const readOrganization = async (req, res, selectedConfig) => {
	// Constructing the request body to fetch organization details
	const body = {
		request: {
			// Extracting organisation ID or code from query parameters
			organisationId: req.query.organisation_id || req.query.organisation_code,
		},
	}

	try {
		// If the selected API config has a defined service, set the base URL dynamically
		if(selectedConfig.service){
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		// Sending a POST request to the target service API
		const response = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'], // Passing device info from request headers
			'Authorization': `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}` // Authorization token from environment variables
		})

		// Logging response in debug mode for troubleshooting
		if(process.env.DEBUG_MODE == "true"){
			console.log('RESPONSE:', response)
			console.log('RESPONSE.RESULT:', response?.result)
		}

		// Constructing the final response object with relevant data
		const responseData = {
			result: {
				id: response.result.response.id, 
				name: response.result.response.orgName, 
				related_orgs: [], // Placeholder for related organizations (if needed in future)
			},
			responseCode : response.responseCode // Including response code from API response
		}

		// Sending the final response to the client
		return res.json(responseData)

	} catch (error) {
		// Logging error details in debug mode if enabled
		if(process.env.DEBUG_MODE == "true"){
			console.error('Error fetching organization details:', error)
		}
		// Returning a generic internal server error response
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

/**
 * This function calls sunbird's location search api 
 * @param {Object} bodyData - Body data for api call
 * @param {*} baseUrl - Base url
 * @returns 
 */
const getLocationDetails = async (bodyData, baseUrl) => {
	try {
		// setting API end point and making the call
		const apiEndpoint = "/api/data/v1/location/search"
		const locationDetails = await requesters.post(baseUrl, apiEndpoint, bodyData, {
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
		});
		
		// Verifying the response
		if (locationDetails.responseCode === 'OK' && locationDetails.result?.response?.length > 0) {
			return locationDetails.result.response;
		} else {
			if (process.env.DEBUG_MODE === "true") {
				console.log("Location API error", JSON.stringify(locationDetails));
			}
			return [];
		}
	} catch (error) {
		if (process.env.DEBUG_MODE === "true") {
			console.error('Error in getLocationDetails:', error);
		}
		return [];
	}
};


const projectController = {
	fetchProjectTemplates,
	projectsList,
	profileRead,
	fetchLocationDetails,
	readOrganization
}

module.exports = projectController
