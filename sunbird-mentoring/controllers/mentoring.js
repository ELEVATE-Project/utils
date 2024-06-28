const requesters = require('../utils/requester')
const routeConfigs = require('../constants/routes')
const requestParser = require('../utils/requestParser')

const createProfile = async (req, res, responses, selectedConfig) => {
	return await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})
}
const updateUser = async (req, res, responses, selectedConfig) =>
	await requesters.patch(req.baseUrl, selectedConfig.targetRoute.path, req.body, req.headers)

const entityTypeRead = async (req, res, responses, selectedConfig) =>
	await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': req.headers['x-auth-token'],
	})

const rolePermissions = async (req, res, responses, selectedConfig) =>
	await requesters.post(req.baseUrl, selectedConfig.targetRoute.path, req.body, {
		'X-auth-token': `bearer ${responses.user.result.access_token}`,
	})

const profileRead = async (req, res, selectedConfig) => {
    try {
        const targetRoute1 = selectedConfig.targetRoute.paths[0].path;
        const targetRoute2 = selectedConfig.targetRoute.paths[1].path;

        const userCreateResponse = await requesters.post(req.baseUrl, targetRoute1, {}, req.headers);
        if (userCreateResponse.responseCode == 'OK') {
            const mentoringResponse = await requesters.get(req.baseUrl, targetRoute2, req.headers);
            res.json(mentoringResponse);
        } else 
            res.json(userCreateResponse);
    } catch (error) {
        console.error('Error fetching organization details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
    
    

mentoringController = {
	createProfile,
	updateUser,
	entityTypeRead,
	rolePermissions,
	profileRead,
}

module.exports = mentoringController
