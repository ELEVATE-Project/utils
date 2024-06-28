const _ = require('lodash')

exports.transformUpdateUserBody = (requestBody) => {
	const allowedKeys = [
		'designation',
		'area_of_expertise',
		'education_qualification',
		'rating',
		'user_type',
		'meta',
		'stats',
		'tags',
		'configs',
		'visibility',
		'organisation_ids',
		'external_session_visibility',
		'external_mentor_visibility',
	]

	return _.pick(requestBody, allowedKeys)
}
