const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const common = require('../constants/common')

const fetchResources = async (req, res, selectedConfig) => {
	try {

		const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
		let projectPath = null
		let projectBaseUrl = null
		let surveyPath = null
		let surveyBaseUrl = null

		selectedConfig?.targetRoute?.paths.map((targetRoute) => {
			if(targetRoute.path == common.PROJECT_END_POINT){
				projectPath = targetRoute.path
				projectBaseUrl = targetRoute.baseUrl
			}
			if(targetRoute.path == common.SURVEY_END_POINT){
				surveyPath = targetRoute.path
				surveyBaseUrl = targetRoute.baseUrl
			}
		})

		// fetch the max limit from the env file for the DB Find API
		const max_limit = process.env.RESOURCE_MAX_FETCH_LIMIT ? parseInt(process.env.RESOURCE_MAX_FETCH_LIMIT, 10) : 1000

		let response = { result: { data: [] } }

		let proceedToCallProjectService = false
		let proceedToCallSurveyService = false

		let projectResponse = {}
		let surveyResponse = {}

		let projectReqBody = {
			query: {}
		}
		let surveyReqBody = {
			query: {}
		}

		let apiHeader = {}
		apiHeader[common.AUTH_TOKEN_KEY] = req.headers[common.AUTH_TOKEN_KEY].replace(/^(Bearer|bearer)\s*/, '')
		apiHeader[common.HEADER_CONTENT_TYPE] = req.headers[common.HEADER_CONTENT_TYPE] ? req.headers[common.HEADER_CONTENT_TYPE] : 'application/json'

		if (req.body) {
			// check if body has key resourceType else assign []
			const resourceType = req?.body?.resourceType || [];
			if (Array.isArray(resourceType) && resourceType.length > 0) {

				// if resource type have type = projects proceed to call api 
				proceedToCallProjectService = resourceType.includes(common.RESOURCE_TYPE_PROJECT);

				// if resource type have type = survey , observations or observation_with_rubrics proceed to call api 
				proceedToCallSurveyService = resourceType.includes(common.RESOURCE_TYPE_OBSERVATION) || resourceType.includes(common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS) || resourceType.includes(common.RESOURCE_TYPE_SURVEY);
				if (proceedToCallSurveyService) {
					// body queries for samiksha service - based on specific resource type
					if (req?.body?.resourceType.includes(common.RESOURCE_TYPE_OBSERVATION)) {
						surveyReqBody.query.type = common.RESOURCE_TYPE_OBSERVATION
						surveyReqBody.query.isRubricDriven = false
					}
					if (req?.body?.resourceType.includes(common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS)) {
						surveyReqBody.query.type = common.RESOURCE_TYPE_OBSERVATION
						surveyReqBody.query.isRubricDriven = true
					}
					if (req?.body?.resourceType.includes(common.RESOURCE_TYPE_SURVEY)) {
						surveyReqBody.query.type = common.RESOURCE_TYPE_SURVEY
					}
				}

			} else if (resourceType.length == 0) {
				// if resource type have type = empty call API because the client is expecting all type of resources 
				proceedToCallProjectService = true
				proceedToCallSurveyService = true
			}
		}

		if (proceedToCallProjectService && apiHeader[common.AUTH_TOKEN_KEY] && projectPath && projectBaseUrl) {
			projectReqBody = {
				"query": {
					"status": common.PROJECT_STATUS_PUBLISHED
				},
				"projection": common.PROJECT_PROJECTION_FIELDS,
				"limit": max_limit
			}
			if (req?.body && req.body?.search) {
				projectReqBody.query.title = {
					"$regex": req.body.search,
					"$options": 'i'
				}
			}
			projectResponse = proceedToCallProjectService ? await requesters.post(projectBaseUrl, projectPath, projectReqBody, apiHeader) : {}

			if (projectResponse?.result?.length > 0) {
				let data = []
				// transform the result to fit in the service 
				projectResponse.result.reduce((accumulateResource, projects) => {
					accumulateResource = {}
					for (let project in projects) {
						let newKey = common.PROJECT_TRANSFORM_KEYS[project] || project
						accumulateResource[newKey] = projects[project]
					}
					accumulateResource['type'] = common.RESOURCE_TYPE_PROJECT
					data.push(accumulateResource)
				}, null)
				response.result.data = [...response.result.data, ...data]
			}
		}
		
		if (proceedToCallSurveyService && apiHeader[common.AUTH_TOKEN_KEY] && surveyPath && surveyBaseUrl) {
			// body queries for samiksha service - generic
			surveyReqBody.query.isReusable = true
			surveyReqBody.query.isDeleted = false
			surveyReqBody.query.isAPrivateProgram = false
			surveyReqBody.query.status = common.SURVEY_STATUS_ACTIVE
			surveyReqBody.projection = common.SURVEY_PROJECTION_FIELDS
			surveyReqBody.limit = max_limit

			if (req?.body && req.body?.search) {
				surveyReqBody.query.name = {
					"$regex": req.body.search,
					"$options": 'i'
				}
			}

			// fetch data from the service 
			surveyResponse = await requesters.post(surveyBaseUrl, surveyPath, surveyReqBody, apiHeader)
			if (surveyResponse?.result?.length > 0) {
				let data = []
				// transform the result to fit in the service 
				surveyResponse.result.reduce((accumulateResource, resources) => {
					accumulateResource = {}
					for (let resource in resources) {
						let newKey = common.PROJECT_TRANSFORM_KEYS[resource] || resource
						accumulateResource[newKey] = resources[resource]
					}
					// check if resource is an observation with rubrics 
					// if it is observation with rubrics update the type value 
					if (resources[common.SURVEY_TYPE_KEY] == common.RESOURCE_TYPE_OBSERVATION && resources[common.SURVEY_IS_RUBRIC_DRIVEN_KEY] == true) {
						accumulateResource[common.SURVEY_TYPE_KEY] = common.RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS
					}
					data.push(accumulateResource)
				}, null)

				response.result.data = [...response.result.data, ...data]
			}
		}

		return response
	} catch (error) {
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const creationController = {
	fetchResources
}

module.exports = creationController
