const express = require('express')
const routes = require('./constants/routes')
const packageRouter = require('./router')
const dependencyManager = require('./helpers/dependencyManager')

const getDependencies = () => {
	return ['kafka', 'kafka-connect', 'redis']
}

const getPackageMeta = () => {
	return {
		basePackageName: 'mentoring',
		packageName: 'elevate-mentoring',
	}
}
const getRequiredDependencies = () => {
	return 	[
		{
			"packageName": 'elevate-mentoring',
			"dependencies": [{ "name": "kafka" }]
		}
	]
}

const createPackage = (options) => {
	const { kafkaClient, redisClient } = options

	console.log('Package 1 Called')

	const sendNotification = (message) => {
		kafkaClient.send(message)
	}

	const cacheSave = (key, value) => {
		redisClient.cacheIt(key, value)
	}

	const router = express.Router()
	router.get('/', (req, res) => {
		res.send('Hello, world! From package1')
		sendNotification('SENDING NOTIFICATION FROM PACKAGE 1 CONTROLLER')
		cacheSave('ALPHA KEY', 'ALPHA ')
	})

	return {
		sendNotification,
		cacheSave,
		router,
	}
}
const kafkaPackageName = "MENTORING NOTIFICATION"

const environmentVariablePrefix = "MENTORING_NOTIFICATION";
const requiredEnvs = {
	[`${environmentVariablePrefix}_KAFKA_BROKERS`]: {
		message: `[${kafkaPackageName}] Required Kafka Brokers Hosts`,
		optional: false,
	},
	[`${environmentVariablePrefix}_KAFKA_GROUP_ID`]: {
		message: `[${kafkaPackageName}] Required Kafka Group ID`,
		optional: false,
	},
	[`${environmentVariablePrefix}_KAFKA_TOPIC`]: {
		message: `[${kafkaPackageName}] Required Kafka Topics`,
		optional: false,
	},
	SAAS_NOTIFICATION_BASE_URL: {
		message: `[${kafkaPackageName}] Saas Notification Service Base Required`,
		optional: false,
	},
	SAAS_NOTIFICATION_SEND_EMAIL_ROUTE: {
		message: `[${kafkaPackageName}] Saas Notification Send Email Route Required`,
		optional: false,
	}
}

module.exports = {
	dependencies: getDependencies(),
	routes,
	createPackage,
	requiredEnvs,
	packageMeta: getPackageMeta(),
	packageRouter,
	dependencyManager,
	requiredDependencies:getRequiredDependencies
}


