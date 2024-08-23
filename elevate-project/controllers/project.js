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
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	let response = { result: { data: [], count: 0 } }
	let proceedToCallProjectService = true
	let resp = {}

	// fetch the max limit from the env file for the DB Find API
	const max_limit = process.env.RESOURCE_MAX_FETCH_LIMIT ? parseInt(process.env.RESOURCE_MAX_FETCH_LIMIT, 10) : 1000

	if (req.body) {
		const resourceType = req?.body?.resourceType || [];
		if (Array.isArray(resourceType) || resourceType.length > 0) {
			const hasProjectType = resourceType.includes(common.RESOURCE_TYPE_PTOJECT);
			proceedToCallProjectService = hasProjectType || resourceType.length === 0;
		}
	}

	if (proceedToCallProjectService) {
		let body = {
			"query": {
				"status": common.PROJECT_STATUS_PUBLISHED
			},
			"projection": common.PROJECT_PROJECTION_FIELDS,
			"limit": max_limit
		}
		// custom header 
		const header = {
			'internal-access-token': req.headers['internal_access_token'],
			'Content-Type': 'application/json'
		}
		if (req.body.search) body.query.title = {
			"$regex": req.body.search,
			"$options": 'i'
		}
		resp = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, header)
	}

	if (resp?.result?.length > 0) {
		let data = []
		// transform the result to fit in the service 
		resp.result.reduce((acc, item) => {
			acc = {}
			for (let key in item) {
				let newKey = common.PROJECT_TRANSFORM_KEYS[key] || key
				acc[newKey] = item[key]
			}
			acc['type'] = common.RESOURCE_TYPE_PTOJECT
			data.push(acc)
		}, null)

		response.result.data = data
	}

	return response
}

const projectController = {
	fetchProjectTemplates
}

module.exports = projectController