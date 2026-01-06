/**
 * name : controllers/project.js
 * author : Adithya Dinesh
 * Date : 22-Aug-2024
 * Description : Orchestration controller for Samiksha service
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
const {matchPathsAndExtractParams} = require('../utils/patternMatcher')
const {pathParamSetter} = require('../utils/pathParamSetter')
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
				if (Array.isArray(req.body.query._id)) {
					// If it's an array, use it directly
					bodyData["request"]["filters"] = {
						"id":  req.body.query._id 
					};
				} else if (req.body.query._id["$in"]) {
					// If it's an object with `$in`, use its value
					bodyData["request"]["filters"] = {
						"id": req.body.query._id["$in"]
					};
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
			if (typeof req.body.query.entityType === "object" && "$in" in req.body.query.entityType) {
				bodyData["request"]["filters"]["type"] = req.body.query.entityType["$in"];
			} else {
				bodyData["request"]["filters"]["type"] = req.body.query.entityType;
			}
		}
		console.log(JSON.stringify(bodyData),'---------------------------------------------------------')

		let groups = {
			school: new Set(),
			district: new Set(),
			block: new Set(),
			cluster: new Set(),
			state:new Set()
		  };
		  let convertedGroups
		if( "_id" in req.body.query && req.body.projection && req.body.projection.includes("groups")){

			let filterData = {
				"orgLocation.id" : req.body.query._id,
			}
			let fields = ["externalId","orgLocation"];
            let subEntitiesCode = await orgSchoolSearch(
				filterData,
				req.pageSize,
				req.pageNo,
				req.searchText,
				fields
			);
			if( !subEntitiesCode.responseCode ==='OK' ) {
				return ({
					"message" : "No entitiy found",
					"result" : [{
						"count":0,
						"data" : []
					}]
				})
			}
			let schoolDetails = subEntitiesCode.data;
			
			const validTypes = new Set(['school', 'district', 'block', 'cluster',"state"]); // Fast lookup for valid types

			schoolDetails.forEach(schoolData => {
				schoolData.orgLocation.forEach(location => {								
					if (validTypes.has(location.type)) {
					  groups[location.type].add(location.id); // Use Set for uniqueness
					} 
				  });
			  
			});
			  
			 convertedGroups = Object.fromEntries(
				Object.entries(groups).map(([key, value]) => [key, [...value]])
			  );
       
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
				
				locationDetails.result= locationDetails.result.map(location => {
					location["_id"] = location.id
					location["registryDetails"] = {
						"code" : location.code
					}
					location['metaInformation']={
						'name' : location.name
					}
					location["entityType"] = location.type
					location["groups"]=convertedGroups
					return location;
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
						title: ele.subType // map subType to title
					};
				});
				
			}
			// generate location data of user for EP
			if (userProfileData.result.profileLocation && userProfileData.result.profileLocation.length > 0) {
				userProfileData.result.profileLocation.forEach(location => {
					// Set each location's type as a key in userProfileData.result with the id as value
					userProfileData.result[location.type] = {
						value: location.id
					};
				});
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

const orgSchoolSearch = async ( filterData, pageSize = "", pageNo = "", searchKey = "", fields = [] ) =>{
	try {

		let bodyData = {};
		bodyData["request"] = {};
		bodyData["request"]["filters"] = filterData;

		if ( pageSize !== "" ) {
			bodyData["request"]["limit"] = pageSize;
		} 

		if ( pageNo !== "" ) {
			let offsetValue = pageSize * ( pageNo - 1 ); 
			bodyData["request"]["offset"] = offsetValue;
		}

		// if ( searchKey !== "" ) {
		// 	if ( gen.utils.checkIfStringIsNumber(searchKey) ) {
		// 		bodyData["request"]["fuzzy"] = {
		// 			"externalId" : searchKey
		// 		}
		// 	} else {
		// 		bodyData["request"]["fuzzy"] = {
		// 			"orgName" : searchKey
		// 		}
		// 	}
		// }

		//for getting specified key data only.
		if ( fields.length > 0 ) {
			bodyData["request"]["fields"] = fields;
		}
	  

		const response = await requesters.post(process.env.ENTITY_SERVICE_BASE_URL,"/api/org/v2/search", bodyData, {
			'Authorization': `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}` // Authorization token from environment variables
		})
		
	// Logging response in debug mode for troubleshooting
	if(process.env.DEBUG_MODE == "true"){
		console.log('RESPONSE:', response)
		console.log('RESPONSE.RESULT:', response?.result)
	}
	// Constructing the final response object with relevant data
	const responseData = {
		
			count: response.result.response.count, 
			data: response.result.response.content, 
			
		responseCode : response.responseCode // Including response code from API response
	}

	// Sending the final response to the client
	return responseData

	} catch (error) {
		console.log(error)
		return (error);
	}

}
const surveyController = {
	fetchObserbationAndSurvey,
	profileRead,
	fetchLocationDetails,
	readOrganization
}

module.exports = surveyController

