const convertIdsToString = (json) => {
	// if its not an object or is null, return it as is
	if (typeof json !== 'object' || json === null) {
		return json
	}

	// if its an array, recursively transform each element
	if (Array.isArray(json)) {
		return json.map((item) => convertIdsToString(item))
	}

	// if its an object, recursively transform each property
	const transformed = {}
	for (const key in json) {
		if (Object.prototype.hasOwnProperty.call(json, key)) {
			if (key === 'id' || key === 'organization_id' || key === 'related_orgs') {
				// convert id, organization_id, or related_orgs to string if they are integers
				transformed[key] = typeof json[key] === 'number' ? json[key].toString() : json[key]
			} else {
				// recursively transform nested objects or arrays
				transformed[key] = convertIdsToString(json[key])
			}
		}
	}
	return transformed
}

exports.convertIdsToString = convertIdsToString
