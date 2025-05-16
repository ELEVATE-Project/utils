const { post } = require('../utils/requester')

const kafkaManager = async (kafkaPackage, environmentVariables) => {
	try {

		console.log(kafkaPackage,"--------------- elevate-kafka--   ",environmentVariables);
		const { ElevateKafka } = kafkaPackage

		const kafka = new ElevateKafka(
			environmentVariables.MENTORING_NOTIFICATION_KAFKA_BROKERS,
			environmentVariables.MENTORING_NOTIFICATION_KAFKA_BROKERS,
			{
				packageName: 'elevate-mentoring',
			}
		)
		console.log(" ----------- elevate-kafka-2",kafka);

		const topics = [environmentVariables.MENTORING_NOTIFICATION_KAFKA_TOPIC]
		const consumer = await kafka.createConsumer(environmentVariables.MENTORING_NOTIFICATION_KAFKA_GROUP_ID, topics)
		await kafka.runConsumer(consumer, async (topic, message) => {

			console.log(topic," -------------  kafka-message ------",message)
			if (topic == environmentVariables.MENTORING_NOTIFICATION_KAFKA_TOPIC) {
				
				if(process.env.DEBUG_MODE == "true"){
					console.log("-------------------- message",message.value);
				}
				const body = (JSON.parse(message.value));
				if(process.env.DEBUG_MODE == "true"){
					console.log("-------------------- body ",body);
				}
				console.log("-------------------- kafka-body ",body);
				if(body && body.type=="email"){
					try {


					const emailContent = body.email;
					const to = emailContent.to.split(',')

					if(process.env.DEBUG_MODE == "true"){
						// console.log("---------- API request header",JSON.stringify(headers));
					}
					const requestBody = {
						email: {
								to:  to,
								// email : emailContent.cc ? emailContent.cc.split(',') : null,
								// sender: environmentVariables.SUNBIRD_NOTIFICATION_SENDER_EMAIL,
								subject: emailContent.subject,
								body: emailContent.body
						}
					}

					if(process.env.DEBUG_MODE == "true"){
						console.log("---------- API request",JSON.stringify(requestBody));
					}
					
					post(
						environmentVariables.SAAS_NOTIFICATION_BASE_URL,
						environmentVariables.SAAS_NOTIFICATION_SEND_EMAIL_ROUTE,
						requestBody,
						{}
					)
						
					} catch (error) {

						console.log("------------- kafka-error --",error)
						
					}
				
			

				}

			}
		})
	} catch (error) {
		console.log("=========== kfak-error ==========")
		console.log(error)
		throw error
	}
}

module.exports = kafkaManager
