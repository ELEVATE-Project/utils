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
	validateHealthConfig(config)
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
			const healthy = await kafka.check(config.checks.kafka.url, config.checks.kafka.topic)
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

	// Check BullMQ (Redis-backed job queue) if enabled
	if (config?.checks?.bullmq?.enabled) {
		try {
			const bullmq = require('./services/bullmq')
			const healthy = await bullmq.check(config.checks.bullmq.redisHost, config.checks.bullmq.redisPort)
			checks.push(serviceResult('bullmq', healthy))
		} catch (err) {
			checks.push(serviceResult('bullmq', false))
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
 * Validates the structure of the health check configuration.
 *
 * @param {Object} config - The configuration object for health checks.
 * @param {Object} config.checks - The checks object containing service configurations.
 * @param {Object} [config.checks.kafka] - Kafka config with `enabled` and `url`.
 * @param {Object} [config.checks.postgres] - PostgreSQL config with `enabled` and `url`.
 * @param {Object} [config.checks.redis] - Redis config with `enabled` and `url`.
 * @param {Object} [config.checks.mongodb] - MongoDB config with `enabled` and `url`.
 * @param {Object} [config.checks.gotenberg] - Gotenberg config with `enabled` and `url`.
 * @param {Array<Object>} [config.checks.microservices] - List of microservice health configs.
 *
 * @throws Will throw an error if required fields are missing for any enabled service.
 */
function validateHealthConfig(config) {
	if (!config.checks) {
		throw new Error('Health config must include a `checks` object')
	}

	const { kafka, postgres, redis, mongodb, gotenberg, microservices } = config.checks

	const basicServices = [
		{ name: 'kafka', value: kafka },
		{ name: 'postgres', value: postgres },
		{ name: 'redis', value: redis },
		{ name: 'mongodb', value: mongodb },
		{ name: 'gotenberg', value: gotenberg },
	]

	for (const { name, value } of basicServices) {
		if (value?.enabled && !value.url) {
			throw new Error(`Missing 'url' for enabled service: ${name}`)
		}
	}
	// Validate Kafka (needs both url and topic)
	if (kafka?.enabled) {
		if (!kafka.url) {
			throw new Error("Missing 'url' for enabled service: kafka")
		}
		if (!kafka.topic) {
			throw new Error("Missing 'topic' for enabled service: kafka")
		}
		if (!kafka.groupId) {
			throw new Error("Missing 'groupId' for enabled service: kafka")
		}
	}

	if (Array.isArray(microservices)) {
		microservices.forEach((service, index) => {
			if (service.enabled) {
				const missingKeys = []
				if (!service.name) missingKeys.push('name')
				if (!service.url) missingKeys.push('url')
				if (!service.request) missingKeys.push('request')
				if (!service.expectedResponse) missingKeys.push('expectedResponse')

				if (missingKeys.length > 0) {
					throw new Error(
						`Missing required fields for enabled microservice at index ${index}: ${missingKeys.join(', ')}`
					)
				}
			}
		})
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
