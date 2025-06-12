/**
 * name : controllers/scp.js
 * author : Priyanka Pradeep
 * Date : 24-Apr-2025
 * Description : Orchestration controller for scp
 */

const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')
const { matchPathsAndExtractParams } = require('../utils/patternMatcher')
const { pathParamSetter } = require('../utils/pathParamSetter')

const fetchLocationDetails = async (req, res, selectedConfig) => {
	try {
		// validate the body, if body is not present throw error
		if (!(Object.keys(req['body']).length > 0) || !(Object.keys(req['body']['query']).length > 0)) {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('req.body cannot be empty')
			}
			res.status(500).json('Internal Server Error')
		}

		// if passed api config has service value defined. We are getting the baseURl of that service from env of Interface service
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
		let targetedRoutePath = selectedConfig.targetRoute.path
		const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(targetedRoutePath, params)

		// prepare req.body to match sunbird location API req.body
		let bodyData = {}
		bodyData['request'] = {}
		bodyData['request']['filters'] = {}
		if ('_id' in req.body.query) {
			if (typeof req.body.query._id == 'object') {
				bodyData['request']['filters'] = {
					id: req.body.query._id['$in'],
				}
			} else {
				bodyData['request']['filters'] = {
					id: req.body.query._id,
				}
			}
		}
		if ('code' in req.body.query) {
			if (typeof req.body.query.code == 'object') {
				bodyData['request']['filters'] = {
					code: req.body.query.code['$in'],
				}
			} else {
				bodyData['request']['filters'] = {
					code: req.body.query.code,
				}
			}
		}

		if ('metaInformation.name' in req.body.query) {
			bodyData['request']['filters'] = {
				name: req.body.query['metaInformation.name'],
			}
		}

		if ('entityType' in req.body.query) {
			bodyData['request']['filters']['type'] = req.body.query.entityType['$in']
		}

		// fetch location details
		let locationDetails = await requesters.post(req.baseUrl, targetRoute, bodyData, {
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
		})

		// confirm success response
		if (locationDetails.responseCode === 'OK') {
			locationDetails['result'] = locationDetails.result.response
			locationDetails['status'] = 200

			// modify the response to be compatible with EP
			if (locationDetails.result.length > 0) {
				locationDetails.result.map((location) => {
					location['_id'] = location.id
					location['registryDetails'] = {
						code: location.code,
					}
					location['metaInformation'] = {
						name: location.name,
					}
					location['entityType'] = location.type
				})
			}
		} else {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('location API error', JSON.stringify(locationDetails))
			}
			res.json(locationDetails)
		}

		res.json(locationDetails)
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching location details:', error)
		}
		res.status(500).json({ error: 'Internal Server Error' })
	}
}

const profileRead = async (req, res, selectedConfig) => {
	try {
		// if passed api config has service value defined. We are getting the baseURl of that service from env of Interface service
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		let targetedRoutePath = selectedConfig.targetRoute.path
		console.log(targetedRoutePath, 'targetedRoutePath')
		const params = matchPathsAndExtractParams(selectedConfig.sourceRoute, req.originalUrl)
		const targetRoute = pathParamSetter(targetedRoutePath, params)

		// Fetch user profile details
		let userProfileData = await requesters.get(
			req.baseUrl,
			targetRoute,
			{
				Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
				'x-authenticated-user-token': req.headers['x-auth-token'],
			},
			req.body
		)

		if (process.env.DEBUG_MODE == 'true') {
			console.log('RESPONSE:', userProfileData)
			console.log('RESPONSE.RESULT:', userProfileData?.result)
		}

		// confirm success response
		if (userProfileData.responseCode === 'OK') {
			userProfileData['result'] = userProfileData.result.response
			//generate role data for SCP
			if (userProfileData.result.roles && userProfileData.result.roles.length > 0) {
				// Create a new user_roles array with transformed data
				userProfileData.result.user_roles = userProfileData.result.roles.map((eachRole) => {
					return {
						label: eachRole.role
							.toLowerCase()
							.split('_')
							.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
							.join(' '),
						title: eachRole.role,
					}
				})
			}

			userProfileData['result'].organization_id = userProfileData.result?.rootOrgId
			userProfileData['result'].organization = {
				id: userProfileData.result?.rootOrgId,
				name: userProfileData.result?.rootOrgName,
			}
			;(userProfileData['result'].name = userProfileData.userName),
				(userProfileData['result'].email = userProfileData.recoveryEmail)
			res.json(userProfileData)
		} else {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('profileRead error', JSON.stringify(userProfileData))
			}
			res.json(userProfileData)
		}
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
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
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		// Sending a POST request to the target service API
		const response = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'], // Passing device info from request headers
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`, // Authorization token from environment variables
		})

		// Logging response in debug mode for troubleshooting
		if (process.env.DEBUG_MODE == 'true') {
			console.log('RESPONSE:', response)
			console.log('RESPONSE.RESULT:', response?.result)
		}

		// Constructing the final response object with relevant data
		const responseData = {
			result: {
				id: response.result.response.id,
				name: response.result.response.orgName,
				code: response.result.response.orgCode,
				related_orgs: [], // Placeholder for related organizations (if needed in future)
			},
			responseCode: response.responseCode, // Including response code from API response
		}

		// Sending the final response to the client
		return res.json(responseData)
	} catch (error) {
		// Logging error details in debug mode if enabled
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching organization details:', error)
		}
		// Returning a generic internal server error response
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const entityListBasedOnEntityType = async (req, res, selectedConfig) => {
	try {
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		let bodyData = {
			request: {
				filters: {},
			},
		}
		Object.keys(req.query).forEach((query) => {
			if (query == 'entityType') bodyData.request.filters.type = req.query[query]
			if (query == 'limit') bodyData.request[query] = Number(req.query[query])
			if (query == 'page') bodyData.request.offset = Number(req.query[query])
		})
		const locationDetails = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, bodyData, {
			Authorization: `bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
			'content-type': 'application/json',
		})
		// Verifying the response
		if (locationDetails.responseCode === 'OK' && locationDetails.result?.response?.length > 0) {
			res.json({
				message: 'ASSETS_FETCHED_SUCCESSFULLY',
				status: 200,
				result: entityListDataProcessor(locationDetails.result.response),
				count: locationDetails.result.count,
			})
			// return
		} else {
			if (process.env.DEBUG_MODE === 'true') {
				console.log('Location API error', JSON.stringify(locationDetails))
			}
			return []
		}
	} catch (error) {
		if (process.env.DEBUG_MODE === 'true') {
			console.error('Error in getLocationDetails:', error)
		}
		return []
	}
}

const subEntityListBasedOnRoleAndLocation = async (req, res, selectedConfig) => {
	try {
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		const targetRoute = `${selectedConfig.targetRoute.path}/${req.params.id}?role=${common.DEFAULT_ROLE_FOR_STATE_HIERARCHY}`

		// Format token removes "Bearer " if present at the start
		const authToken = req.headers['x-auth-token'] || ''
		const cleanToken = authToken.replace(/^bearer\s+/i, '')

		let childHierarchyResponse = await requesters.get(
			req.baseUrl,
			targetRoute,
			{
				Authorization: `Bearer ${process.env.ML_SERVICE_BEARER_TOKEN}`,
				'x-authenticated-user-token': cleanToken,
				'x-auth-token': cleanToken,
			},
			{}
		)

		if (!childHierarchyResponse || childHierarchyResponse?.status != 200) {
			throw new Error('Failed to get response')
		}

		let data = [
			{
				_id: req.params.id,
				childHierarchyPath: childHierarchyResponse?.result || [],
			},
		]

		res.json({
			message: 'ENTITIES_CHILD_HIERACHY_PATH',
			status: 200,
			result: data,
		})
	} catch (error) {
		if (process.env.DEBUG_MODE === 'true') {
			console.error('Error in subEntityListBasedOnRoleAndLocation:', error)
		}
		return []
	}
}

const entityListDataProcessor = (data) => {
	const response = data.map((entity) => {
		return {
			_id: entity.identifier,
			name: entity.name,
			externalId: entity.identifier,
		}
	})
	return response
}

/**
 * This function calls sunbird's location search api
 * @param {Object} bodyData - Body data for api call
 * @param {*} baseUrl - Base url
 * @returns
 */
const getLocationDetails = async (req, res, selectedConfig) => {
	try {
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}
		const bodyData = {
			request: {
				filters: {},
			},
		}
		const locationDetails = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, bodyData, {
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
		})

		// Verifying the response
		if (locationDetails.responseCode === 'OK' && locationDetails.result?.response?.length > 0) {
			return locationDetails.result.response
		} else {
			if (process.env.DEBUG_MODE === 'true') {
				console.log('Location API error', JSON.stringify(locationDetails))
			}
			return []
		}
	} catch (error) {
		if (process.env.DEBUG_MODE === 'true') {
			console.error('Error in getLocationDetails:', error)
		}
		return []
	}
}

const readUserById = async (req, res, selectedConfig) => {
	const userId = req.params.id
	try {
		console.log('read by userid')
		const targetRoute1 = selectedConfig.targetRoute.paths[0].path
		const targetRoute2 = selectedConfig.targetRoute.paths[1]

		const userResponse = await requesters.get(req.baseUrl, targetRoute1, req.headers, {
			id: userId,
		})

		if (process.env.DEBUG_MODE == 'true') {
			console.log('READ API response status:', userResponse.params.status)
			console.log(' user read API resp ==  ', JSON.stringify(userResponse))
			console.log(' API Response', JSON.stringify(userResponse))
		}
		if (userResponse.params.status == 'FAILED') {
			if (process.env.DEBUG_MODE == 'true') {
				console.log('userResponse.params.status ', userResponse.params.status)
				console.log('userResponse.params.status ', JSON.stringify(userResponse))
			}
			return res.send(userResponse)
		}
		const enrollmentResponse = await requesters.get(targetRoute2.baseUrl, targetRoute2.path, req.headers, {
			id: userId,
		})

		if (process.env.DEBUG_MODE == 'true') {
			console.log('CALLING COMPETENCY ')
		}

		let competencyIds = []
		if (enrollmentResponse.result && enrollmentResponse.result.courses) {
			competencyIds = getCompetencyIds(enrollmentResponse.result.courses || [])
		}

		if (process.env.DEBUG_MODE == 'true') {
			console.log('competencyIds ==', competencyIds)
			console.log('userResponse profile response ', userResponse)
		}
		const responseData = processUserResponse(userResponse)
		responseData.result.competency = competencyIds

		if (process.env.DEBUG_MODE == 'true') {
			console.log('RESPONSE DATA: ', JSON.stringify(responseData, null, 3))
		}
		responseData.responseCode = 'OK'
		return res.send(responseData)
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processUserSearchResponse = (content) => {
	if (process.env.DEBUG_MODE == 'true') {
		// console.log(content,'============ user Details  ====================')
	}
	return {
		result: content.map((user) => {
			return {
				id: user.id,
				image: user?.profileImageUrl,
				name: user?.firstName,
				organization: {
					id: user?.organisations?.[0]?.organisationId,
					name: user?.organisations?.[0]?.orgName,
				},
				email: user?.primaryEmail,
			}
		}),
	}
}

const accountList = async (req, res, selectedConfig) => {
	const body = {
		request: {
			filters: {},
		},
	}
	try {
		const userIds = req.body.user_ids

		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		if (userIds) {
			body.request.filters.id = userIds
		}

		if (req.query.organization_id) {
			body.request.filters['rootOrgId'] = req.query.organization_id
		}

		if (req.query.organization_code) {
			body.request.filters['rootOrgId'] = req.query.organization_code
		}

		if (req.query.type && req.query.type != 'all') {
			body.request.filters['roles.role'] = req.query.type
		}

		if (req.query.limit) {
			body.request['limit'] = parseInt(req.query.limit)
		}

		if (req.query.page && req.query.page > 0) {
			body.request['offset'] = parseInt(req.query.page - 1)
		}

		// Format token removes "Bearer " if present at the start
		const authToken = req.headers['x-auth-token'] || ''
		const cleanToken = authToken.replace(/^bearer\s+/i, '')

		console.log(cleanToken,'cleanToken')

		const userSearchResponse = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'], // Passing device info from request headers
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`, // Authorization token from environment variables
			'x-authenticated-user-token': cleanToken,
		})

		if (process.env.DEBUG_MODE == 'true') {
			console.log('------- ================ -------', req.body)
			console.log(body, 'Req body---')
			console.log(userSearchResponse, 'userSearchResponse')
			console.log(cleanToken, 'Token')
		}

		if (userSearchResponse?.responseCode != 'OK') {
			throw new Error('User Search Failed')
		}

		let data = processUserSearchResponse(userSearchResponse.result.response.content) || []
		return res.json({
			result: {
				data: data?.result,
				count: data?.result?.length,
			},
		})
	} catch (error) {
		console.log(error, 'error')
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const organizationList = async (req, res, selectedConfig) => {
	console.log('came to org list')
	const body = {
		request: {
			filters: {},
		},
	}
	try {
		const orgIds = req.body.organizationIds

		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		if (orgIds) {
			body.request.filters.id = orgIds
		}

		if (req.query.organization_id) {
			body.request.filters.id = req.query.organization_id
		}

		if (req.query.limit) {
			body.request['limit'] = parseInt(req.query.limit)
		}

		if (req.query.page && req.query.page > 0) {
			body.request['offset'] = parseInt(req.query.page - 1)
		}

		// Format token removes "Bearer " if present at the start
		const authToken = req.headers['x-auth-token'] || ''
		const cleanToken = authToken.replace(/^bearer\s+/i, '')

		const orgSearchResponse = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'], // Passing device info from request headers
			Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`, // Authorization token from environment variables
			'x-authenticated-user-token': cleanToken,
		})

		if (process.env.DEBUG_MODE == 'true') {
			console.log('------- ================ -------', req.body)
			console.log(body, 'Req body')
			console.log(orgSearchResponse, 'orgSearchResponse')
			console.log(cleanToken, body, 'Req body')
		}

		if (orgSearchResponse?.responseCode != 'OK') {
			throw new Error('User Search Failed')
		}

		let data = processOrgSearchResponse(orgSearchResponse.result.response.content) || []
		return res.json({ result: data?.result })
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processOrgSearchResponse = (content) => {
	if (process.env.DEBUG_MODE == 'true') {
		// console.log(content,'============ org Details  ====================')
	}
	return {
		result: content.map((org) => {
			return {
				id: org.id,
				name: org?.orgName,
				code: org?.orgCode,
				description: '',
			}
		}),
	}
}

const getTargetedRoles = async (req, res, selectedConfig) => {
	try {
		//fetch the entity details
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		// Function to fetch entities by filter
        const fetchEntities = async (filters) => {
            const bodyData = {
                request: { filters, limit : 10000 }
            };

            try {
                const response = await requesters.post(
                    req.baseUrl,
                    selectedConfig.targetRoute.path,
                    bodyData,
                    {
                        Authorization: `Bearer ${process.env.SUNBIRD_BEARER_TOKEN}`
                    }
                );
                if (response.responseCode === 'OK' && response.result?.response) {
                    return response.result.response;
                }
                return [];
            } catch (error) {
                if (process.env.DEBUG_MODE === 'true') {
                    console.error('Error fetching entities:', error.message);
                }
                return [];
            }
        };

		// Function to collect all IDs from entities and fetch their children
        const fetchAllChildrenByIds = async (parentIds, typeSet = new Set()) => {
            if (!parentIds.length) {
                return typeSet;
            }

            // Fetch all entities that have any of the parentIds as their parent
            const childEntities = await fetchEntities({ parentId: parentIds });
            
            // Stop if no child entities found
            if (!childEntities.length) {
                return typeSet;
            }

            // Collect all IDs from the current level
            const currentLevelIds = [];
            
            // Process each entity
            for (const entity of childEntities) {
                if (entity.type) {
                    typeSet.add(entity.type);
                }
                if (entity.id) {
                    currentLevelIds.push(entity.id);
                }
            }

            // Recursively fetch children using all collected IDs
            if (currentLevelIds.length > 0) {
                await fetchAllChildrenByIds(currentLevelIds, typeSet);
            }

            return typeSet;
        };

		// Step 1: Get the initial entity by ID
		const initialEntities = await fetchEntities({
            id: req.params.id
        });

        // Step 2: Collect types starting from the initial entity
        const typeSet = new Set();
        if (initialEntities.length && initialEntities[0]?.id) {
            // Add the initial entity's type if it exists
            if (initialEntities[0].type) {
                typeSet.add(initialEntities[0].type);
            }
            
            // Start with the initial entity ID and fetch all children recursively
            await fetchAllChildrenByIds([initialEntities[0].id], typeSet);
        }

        // Step 3: Convert Set to array and return response
        const entityTypes = Array.from(typeSet);
		console.log('Entity Types:', entityTypes);
		let result = {
			data : []
		}
		
		if (entityTypes.length === 0) {
			return res.json({
				message: 'ROLES_FETCHED_SUCCESSFULLY',
				result,
				status: 200
			});
		}

		//fetch roles based on entity types
		let reqBody = {
			query: {
				"entityTypes.entityType" : {$in: entityTypes} 
			}

		}
		
		req['baseUrl'] = process.env.MLCORE_SERVICE_BASE_URL
		let dbFindURL = process.env.ML_SURVEY_DB_FIND_URL
 
		const authToken = req.headers['x-auth-token'] || ''
		const cleanToken = authToken.replace(/^bearer\s+/i, '')

		let roleResponse = await requesters.post(
			req.baseUrl,
			dbFindURL,
			reqBody,
			{
				Authorization: `Bearer ${process.env.ML_SERVICE_BEARER_TOKEN}`,
				'x-authenticated-user-token': cleanToken,
				'x-auth-token': cleanToken,
			},
		)

		if (!roleResponse || roleResponse?.status != 200 || roleResponse?.result?.length === 0) {
			return res.json({
				message: 'ROLES_FETCHED_SUCCESSFULLY',
				result,
				status: 200
			});
		}
		

		let roles = roleResponse.result.map((role) => {
			return {
				id: role._id,
				value: role.code,
				label: role.title,
				code: role.code
			}
		}) || []

		result.data = roles

        return res.json({
            message: 'ROLES_FETCHED_SUCCESSFULLY',
			result,
			status: 200
        });

	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({
            message: 'Internal server error',
            result: []
        });
	}
}

const getEntityList = async (req, res, selectedConfig) => {
	try {
		if (selectedConfig.service) {
			req['baseUrl'] = process.env[`${selectedConfig.service.toUpperCase()}_SERVICE_BASE_URL`]
		}

		let bodyData = {
			request: {
				filters: {},
			},
		}

		if (req.body.type) {
			bodyData.request.filters.type = req.body.type
		}

		if (req.body.id) {
			bodyData.request.filters.id = req.body.id
		}
		const locationDetails = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, bodyData, {
			Authorization: `bearer ${process.env.SUNBIRD_BEARER_TOKEN}`,
			'content-type': 'application/json',
		})
		// Verifying the response
		if (locationDetails.responseCode === 'OK' && locationDetails.result?.response?.length > 0) {
			res.json({
				result: entityListProcessor(locationDetails.result.response),
			})
			// return
		} else {
			if (process.env.DEBUG_MODE === 'true') {
				console.log('Location API error', JSON.stringify(locationDetails))
			}
			res.json({
				result: []
			})
		}
	} catch (error) {
		if (process.env.DEBUG_MODE == 'true') {
			console.error('Error fetching user details:', error)
		}
		return res.status(500).json({ error: 'Internal Server Error' })
	}
	
}

const entityListProcessor = (data) => {
	const response = data.map((entity) => {
		return {
			_id: entity.identifier,
			name: entity.name,
			externalId: entity.identifier,
			parentId: entity.parentId,
			type: entity.type,
		}
	})
	return response
}




scpController = {
	readUserById,
	profileRead,
	fetchLocationDetails,
	readOrganization,
	accountList,
	organizationList,
	getLocationDetails,
	entityListBasedOnEntityType,
	subEntityListBasedOnRoleAndLocation,
	getTargetedRoles,
	getEntityList
}

module.exports = scpController
