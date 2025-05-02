const routes = require('./constants/routes')
const packageRouter = require('./router')
const dependencyManager = require('./helpers/dependencyManager')

const getPackageMeta = () => {
	return {
		basePackageName: 'notification',
		packageName: 'kb-mentoring-notification',
	}
}

const packageName = 'kb-mentoring-notification'
const environmentVariablePrefix = packageName.toUpperCase().replace(/-/g, '_');

const requiredEnvs = {
	[`${environmentVariablePrefix}_KAFKA_CLIENT_ID`]: {
		message: `[${packageName}] Required Kafka Brokers Hosts`,
		optional: false,
	},
	[`${environmentVariablePrefix}_KAFKA_BROKERS`]: {
		message: `[${packageName}] Required Kafka Brokers Hosts`,
		optional: false,
	},
	[`${environmentVariablePrefix}_KAFKA_GROUP_ID`]: {
		message: `[${packageName}] Required Kafka Group ID`,
		optional: false,
	},
	[`${environmentVariablePrefix}_KAFKA_TOPIC`]: {
		message: `[${packageName}] Required Kafka Topics`,
		optional: false,
	},
	SUNBIRD_NOTIFICAION_SERVICE_BASE_URL: {
		message: `[${packageName}] Required Base URL for the Interface Service`,
		optional: false,
	},
	SUNBIRD_NOTIFICAION_SEND_EMAIL_ROUTE: {
		message: `[${packageName}] Required Route for send email in the Interface Service`,
		optional: false,
	},
	SUNBIRD_NOTIFICATION_SENDER_EMAIL : {
		message: `[${packageName}] Required sender email address in the Interface Service`,
		optional: false,
	},
	SUNBIRD_AUTHORIZATION_TOKEN : {
		message: `[${packageName}] Required authorization token with bearer`,
		optional: false,
	}
}

module.exports = {
	routes,
	packageMeta: getPackageMeta(),
	packageRouter,
	dependencyManager,
	requiredEnvs,
}
