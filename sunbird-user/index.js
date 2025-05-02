const routes = require('./constants/routes')
const packageRouter = require('./router')
const dependencyManager = require('./helpers/dependencyManager')

const getPackageMeta = () => {
	return {
		basePackageName: 'user',
		packageName: 'sunbird-user',
	}
}

const packageName = 'sunbird-user'
const environmentVariablePrefix = packageName.toUpperCase().replace('-', '_')

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
	[`${environmentVariablePrefix}_USER_UPDATE_KAFKA_TOPIC`]: {
		message: `[${packageName}] Required Kafka Topics`,
		optional: false,
	},
	MENTORING_SERVICE_BASE_URL: {
		message: `[${packageName}] Required Base URL for the Mentoring Service`,
		optional: false,
	},
	MENTORING_SERVICE_USER_UPDATE_ROUTE: {
		message: `[${packageName}] Required Route for User Update in the Mentoring Service`,
		optional: false,
	},
	MENTORING_INTERNAL_ACCESS_TOKEN: {
		message: `[${packageName}] Required Internal Access Token of the Mentoring Service`,
		optional: false,
	},
}

module.exports = {
	routes,
	packageMeta: getPackageMeta(),
	packageRouter,
	dependencyManager,
	requiredEnvs,
}
