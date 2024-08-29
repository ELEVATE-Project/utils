const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')
const { convertIdsToString } = require('../utils/integerToStringConverter')

const createUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'device-info': req.headers['device-info'],
	})
}
const updateUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)

	//const filteredRequestBody = requestParser.transformUpdateUserBody(req.body)
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)
}

const entityTypeRead = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})
}

const loginUser = async (req, res, responses) => {
	const selectedConfig = routeConfigs.routes.find((obj) => obj.sourceRoute === req.sourceRoute)
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'captcha-token': req.headers['captcha-token'],
		'device-info': req.headers['device-info'],
	})
}

const readOrganization = async (req, res, selectedConfig) => {
	try {
		const parameterisedRoute = req.query.organisation_code
			? selectedConfig.targetRoute.path + `?organisation_code=${req.query.organisation_code}`
			: selectedConfig.targetRoute.path + `?organisation_id=${req.query.organisation_id}`
		let response = await requesters.get(req.baseUrl, parameterisedRoute, {
			internal_access_token: req.headers['internal_access_token'],
			'Content-Type': 'application/json',
		})
		response.result = convertIdsToString(response.result)
		return res.json(response)
	} catch (error) {
		console.error('Error fetching organization details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const readUser = async (req, res, selectedConfig) => {
	try {
		const parameterisedRoute = req.params.id
			? selectedConfig.targetRoute.path.replace('/:id', `/${req.params.id}`)
			: selectedConfig.targetRoute.path
		let headers

		if (req.params.id) {
			headers = {
				internal_access_token: req.headers['internal_access_token'],
				'Content-Type': 'application/json',
			}
		} else {
			headers = {
				'X-auth-token': req.headers['x-auth-token'],
				'Content-Type': 'application/json',
			}
		}

		let response = await requesters.get(req.baseUrl, parameterisedRoute, headers)

		// Extract only the relevant data
		response.result = convertIdsToString(response.result)
		return res.json(response)
	} catch (error) {
		console.error('Error fetching user details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const accountsList = async (req, res, selectedConfig) => {
	try {
		const headers = {
			internal_access_token: req.headers['internal_access_token'],
			'Content-Type': 'application/json',
		}

		const accountsListResponse = await requesters.get(
			req.baseUrl,
			selectedConfig.targetRoute.path,
			headers,
			req.body,
			req.query
		)

		accountsListResponse.result = await convertIdsToString(accountsListResponse.result)

		return res.json(accountsListResponse)
	} catch (error) {
		console.error('Error fetching list of user details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const validateEmails = async (req, res, selectedConfig) => {
	try {
		const emailIds = req.body.emailIds

		const headers = {
			internal_access_token: req.headers['internal_access_token'],
			'Content-Type': 'application/json',
		}

		const requestBody = { emailIds } // Pass the request body

		const userListResponse = await requesters.post(
			req.baseUrl,
			selectedConfig.targetRoute.path,
			requestBody,
			headers
		)
		userListResponse.result = await convertIdsToString(userListResponse.result)
		return res.json(userListResponse)
	} catch (error) {
		console.error('Error fetching user details by email :', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const userController = {
	createUser,
	updateUser,
	entityTypeRead,
	loginUser,
	readOrganization,
	readUser,
	accountsList,
	validateEmails,
}

module.exports = userController
