/**
 * name : index.js
 * author : Vishnu
 * created-date : 25-june-2025
 * Description : Health check functionality for various services.
 */

const { v1: uuidv1 } = require('uuid')
const httpService = require('./services/httpService')

/**
 * Perform health checks for various services.
 *
 * @param {Object} config - The configuration object containing service health settings.
 * @param {boolean} basicCheck - If true, includes microservice health checks.
 * @param {string} [currentServiceName=''] - Optional. Name of the current service to avoid self-check.
 * @returns {Promise<Object>} - A formatted response with health check results.
 */
async function healthCheckHandler(config, basicCheck = false, currentServiceName = '') {
	const checks = []

	// Check MongoDB health if enabled
	if (config?.checks?.mongodb?.enabled) {
		try {
			const mongodb = require('./services/mongodb')
			const healthy = await mongodb.check(config.checks.mongodb.url)
			checks.push(serviceResult('mongodb', healthy))
		} catch (err) {
			checks.push(serviceResult('mongodb', false))
		}
	}

	// Check Kafka health if enabled
	if (config?.checks?.kafka?.enabled) {
		try {
			const kafka = require('./services/kafka')
			const healthy = await kafka.check(config.checks.kafka.url)
			checks.push(serviceResult('Kafka', healthy))
		} catch (err) {
			checks.push(serviceResult('Kafka', false))
		}
	}

	// Check Redis health if enabled
	if (config?.checks?.redis?.enabled) {
		try {
			const redis = require('./services/redis')
			const healthy = await redis.check(config.checks.redis.url)
			checks.push(serviceResult('redis', healthy))
		} catch (err) {
			checks.push(serviceResult('redis', false))
		}
	}

	// Check Gotenberg (PDF conversion service) if enabled
	if (config?.checks?.gotenberg?.enabled) {
		try {
			const gotenberg = require('./services/gotenberg')
			const healthy = await gotenberg.check(config.checks.gotenberg.url)
			checks.push(serviceResult('gotenberg', healthy))
		} catch (err) {
			checks.push(serviceResult('gotenberg', false))
		}
	}

	// Check other microservices if provided and basicCheck is true
	if (Array.isArray(config.checks.microservices) && !basicCheck) {
		for (let ms of config.checks.microservices) {
			if (!ms.enabled) continue
			// Avoid self-check to prevent request loops
			if (ms.name === currentServiceName) {
				console.log(`[${currentServiceName}] Skipping self-check for '${ms.name}' to avoid loop.`)
				continue
			}

			// Perform health check for the microservice
			const healthy = await httpService.check(ms)
			checks.push(serviceResult(ms.name, healthy))
		}
	}

	// Filter out failed checks
	const failed = checks.filter((s) => !s.healthy)

	// Construct the final health result object
	const result = {
		name: config.name,
		version: config.version,
		healthy: failed.length === 0,
		checks,
	}

	return formatResponse(result)
}


/**
 * Create a service result object from the health check status.
 *
 * @param {string} name - Name of the service.
 * @param {boolean} healthy - Health status of the service.
 * @returns {{ name: string, healthy: boolean, err: string, errMsg: string }} - Result object.
 */
function serviceResult(name, healthy) {
	return {
		name,
		healthy,
		err: healthy ? '' : `${name.toUpperCase()}_HEALTH_FAILED`,
		errMsg: healthy ? '' : `${name} is not healthy`,
	}
}

/**
 * Format the final health check response in a standard structure.
 *
 * @param {Object} result - The object containing service name, version, healthy status, and checks.
 * @returns {Object} - The formatted response object.
 */
function formatResponse(result) {
	return {
		id: 'service.health.api',
		ver: '1.0',
		ts: new Date(),
		params: {
			resmsgid: uuidv1(),
			msgid: uuidv1(),
			status: 'successful',
			err: null,
			errMsg: null,
		},
		status: 200,
		result,
	}
}

module.exports = {
	healthCheckHandler,
}
