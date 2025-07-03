/**
 * name : index.js
 * author : Vishnu
 * created-date : 25-june-2025
 * Description : Health check functionality for various services.
 */

const { v1: uuidv1 } = require('uuid');
const httpService = require('./services/httpService');

async function healthCheckHandler(config,currentServiceName = '') {
	const checks = [];

	if (config?.checks?.mongodb?.enabled) {
		try {
			const mongodb = require('./services/mongodb');
			const healthy = await mongodb.check(config.checks.mongodb.url);
			checks.push(serviceResult('mongodb', healthy));
		} catch (err) {
			checks.push(serviceResult('mongodb', false));
		}
	}
	
	if (config?.checks?.kafka?.enabled) {
		try {
			const kafka = require('./services/kafka');
			const healthy = await kafka.check(config.checks.kafka.url);
			checks.push(serviceResult('Kafka', healthy));
		} catch (err) {
			checks.push(serviceResult('Kafka', false));
		}
	}

	if (config?.checks?.redis?.enabled) {
		try {
			const redis = require('./services/redis');
			const healthy = await redis.check(config.checks.redis.url);
			checks.push(serviceResult('redis', healthy));
		} catch (err) {
			checks.push(serviceResult('redis', false));
		}
	}


	if (config?.checks?.postgres?.enabled) {
		try {
			const postgres = require('./services/postgres');
			const healthy = await postgres.check(config.checks.postgres.url);
			checks.push(serviceResult('postgres', healthy));
		} catch (err) {
			checks.push(serviceResult('postgres', false));
		}
	}

	if (config?.checks?.gotenberg?.enabled) {
		try {
			const gotenberg = require('./services/gotenberg');
			const healthy = await gotenberg.check(config.checks.gotenberg.url);
			checks.push(serviceResult('gotenberg', healthy));
		} catch (err) {
			checks.push(serviceResult('gotenberg', false));
		}
	}

	if (Array.isArray(config.checks.microservices)) {
		for (let ms of config.checks.microservices) {
			if (!ms.enabled) continue;

			if (ms.name === currentServiceName) {
				console.log(`[${currentServiceName}] Skipping self-check for '${ms.name}' to avoid loop.`);
				continue;
			}

			const healthy = await httpService.check(ms);
			checks.push(serviceResult(ms.name, healthy));
		}
	}

	const failed = checks.filter((s) => !s.healthy);

	const result = {
		name: config.name,
		version: config.version,
		healthy: failed.length === 0,
		checks
	};

	return formatResponse(result);
}

function serviceResult(name, healthy) {
	return {
		name,
		healthy,
		err: healthy ? '' : `${name.toUpperCase()}_HEALTH_FAILED`,
		errMsg: healthy ? '' : `${name} is not healthy`
	};
}

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
			errMsg: null
		},
		status: 200,
		result
	};
}

module.exports = {
	healthCheckHandler
};
