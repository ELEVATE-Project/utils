const { post } = require('../utils/requester')

const kafkaManager = async (kafkaPackage, environmentVariables) => {
	try {
		const { ElevateKafka } = kafkaPackage

		const kafka = new ElevateKafka(
			environmentVariables.KB_MENTORING_NOTIFICATION_KAFKA_BROKERS,
			environmentVariables.KB_MENTORING_NOTIFICATION_KAFKA_BROKERS,
			{
				packageName: 'kb-mentoring-notification',
			}
		)

		const topics = [environmentVariables.KB_MENTORING_NOTIFICATION_KAFKA_TOPIC]
		const consumer = await kafka.createConsumer(environmentVariables.KB_MENTORING_NOTIFICATION_KAFKA_GROUP_ID, topics)
		await kafka.runConsumer(consumer, async (topic, message) => {
			if (topic == environmentVariables.KB_MENTORING_NOTIFICATION_KAFKA_TOPIC) {
				
				if(process.env.DEBUG_MODE == "true"){
					console.log("-------------------- message",message.value);
				}
				const body = (JSON.parse(message.value));
				if(process.env.DEBUG_MODE == "true"){
					console.log("-------------------- body ",body);
				}
				if(body && body.type=="email"){
			
					const emailContent = body.email;
					const to = emailContent.to.split(',')


					const headers ={
						'Authorization': environmentVariables.SUNBIRD_AUTHORIZATION_TOKEN
					}
					if(process.env.DEBUG_MODE == "true"){
						console.log("---------- API request header",JSON.stringify(headers));
					}
					const requestBody = {
						request:{
							"notifications": [{
								mode: "email",
								deliveryType: "message",
								ids:  to,
								copyEmail : emailContent.cc ? emailContent.cc.split(',') : null,
								config: {
									"sender": environmentVariables.SUNBIRD_NOTIFICATION_SENDER_EMAIL,
									"subject": emailContent.subject
								},
								template: {
									data: emailContent.body
								}
							}]
						}
					}

					if(process.env.DEBUG_MODE == "true"){
						console.log("---------- API request",JSON.stringify(requestBody));
					}
					post(
						environmentVariables.SUNBIRD_NOTIFICAION_SERVICE_BASE_URL,
						environmentVariables.SUNBIRD_NOTIFICAION_SEND_EMAIL_ROUTE,
						requestBody,
						headers

					)

				}

			}
		})
	} catch (error) {
		console.log(error)
		throw error
	}
}

module.exports = kafkaManager
