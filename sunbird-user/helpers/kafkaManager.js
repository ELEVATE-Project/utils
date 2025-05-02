const { post } = require('../utils/requester')

const kafkaManager = async (kafkaPackage, environmentVariables) => {
	try {
		const { ElevateKafka } = kafkaPackage

		const kafka = new ElevateKafka(
			environmentVariables.SUNBIRD_USER_KAFKA_BROKERS,
			environmentVariables.SUNBIRD_USER_KAFKA_BROKERS,
			{
				packageName: 'sunbird-user',
			}
		)

		const topics = [environmentVariables.SUNBIRD_USER_USER_UPDATE_KAFKA_TOPIC]
		const consumer = await kafka.createConsumer(environmentVariables.SUNBIRD_USER_KAFKA_GROUP_ID, topics)
		await kafka.runConsumer(consumer, async (topic, message) => {
			if (topic == environmentVariables.SUNBIRD_USER_USER_UPDATE_KAFKA_TOPIC) {
				post(
					environmentVariables.MENTORING_SERVICE_BASE_URL,
					environmentVariables.MENTORING_SERVICE_USER_UPDATE_ROUTE,
					JSON.parse(message.value),
					{
						INTERNAL_ACCESS_TOKEN: environmentVariables.MENTORING_INTERNAL_ACCESS_TOKEN,
					}
				)
			}
		})
	} catch (error) {
		console.log(error)
		throw error
	}
}

module.exports = kafkaManager
