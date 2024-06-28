const routeConfigs = require('../constants/routes')
const requesters = require('../utils/requester')
const requestParser = require('../utils/requestParser')

const createUser = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'device-info': req.headers['device-info'],
	})
}
const updateUser = async (req, res, responses, selectedConfig) => {
	return await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)
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
			organisationId: req.query.external_org_id,
		},
	}
	try {
		const response = await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, body, {
			'device-info': req.headers['device-info'],
		})
        const responseData = {
            result:{
                id: response.result.result.id,
                name: response.result.result.orgName,
                related_orgs: []
            }
        }
		return res.json(responseData)
	} catch (error) {
		console.error('Error fetching organization details:', error)
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}

const processUserResponse = (userResponse) => {
    return {
        result: {
            name: userResponse.result.response.profileDetails.personalDetails.firstname,
            email: userResponse.result.response.profileDetails.personalDetails.primaryEmail,
            user_roles: userResponse.result.response.mentoring.roles.map(role => ({
                title: role
            })),
            id: userResponse.result.response.identifier,
            organization_id: userResponse.result.response.rootOrg.id,
        }
    };
};

const readUserById = async (req, res, selectedConfig) => {
    const userId = req.params.id;
    try {
        const userResponse = await requesters.get(req.baseUrl, selectedConfig.targetRoute.path, req.headers, { id: userId });
        const responseData = processUserResponse(userResponse);
        return res.json(responseData);
    } catch (error) {
        console.error('Error fetching user details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const readUserWithToken = async (req, res, selectedConfig) => {
    try {
        let token = req.headers['x-auth-token'];
        if (token && token.toLowerCase().startsWith('bearer ')) 
            token = token.slice(7);
        
        const tokenClaims = jwt.decode(token);
        const userId = tokenClaims.sub.split(':').pop();

        const userResponse = await requesters.get(req.baseUrl, selectedConfig.targetRoute.path, req.headers, { id: userId });
        const responseData = processUserResponse(userResponse);
        return res.json(responseData);
    } catch (error) {
        console.error('Error fetching user details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};



const userController = {
	createUser,
	updateUser,
	entityTypeRead,
	loginUser,
	readOrganization,
    readUserById,
    readUserWithToken
}

module.exports = userController
