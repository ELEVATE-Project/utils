const axios = require('axios');
const _ = require('lodash');

/**
 * Check the health of a microservice based on a flexible config.
 * @param {Object} service - Microservice config
 * @param {string} service.name - Service name (for logs)
 * @param {string} service.url - Endpoint to hit
 * @param {Object} service.request - Optional request details (method, headers, body)
 * @param {Object} service.expectedResponse - Expected status and/or response body
 * @returns {Promise<boolean>} - Whether the check passed
 */
exports.check = async (service) => {
	try {
		const {
			url,
			request = {},
			expectedResponse = {},
			name = 'unknown-service'
		} = service;

		const method = request.method || 'GET';
		const headers = request.header || {};
		const data = request.body || {};
        console.log(`[${name}] Performing HTTP health check on ${url} with method ${method}`);
		const axiosConfig = {
			url,
			method,
			headers,
			timeout: 8000
		};

		// Only include body for methods that support it
		if (['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
			axiosConfig.data = data;
		}

		const res = await axios(axiosConfig);
        console.log(`[${name}] Received response:`, res.status, res.data);
        for (const [key, expectedValue] of Object.entries(expectedResponse)) {
			const actualValue = _.get(res.data, key);
			if (!_.isEqual(actualValue, expectedValue)) {
				console.warn(`[${name}] Response key mismatch: '${key}' expected '${expectedValue}', got '${actualValue}'`);
				return false;
			}
		}
		return true;
	} catch (err) {
		console.error(`[${service.name || 'Service'}] HTTP health check failed:`, err.message);
		return false;
	}
};
