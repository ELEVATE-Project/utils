const _ = require('lodash')

exports.transformUpdateUserBody = (requestBody) => {
    // Add Keys in the array to enable validation
	const allowedKeys = []

	return _.pick(requestBody, allowedKeys)
}
