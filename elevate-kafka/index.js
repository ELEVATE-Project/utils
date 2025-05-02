const { Kafka } = require('kafkajs')

class ElevateKafkaException extends Error {
	constructor(message) {
		super(message)
		this.name = this.constructor.name
		Error.captureStackTrace(this, this.constructor)
	}
}

class ElevateKafka {
	static consumers = new Map()
	static kafkaClients = new Map()

	constructor(clientId, brokers, { connectionTimeout, initialRetryTime, retries, packageName } = {}) {
		if (!clientId) throw new ElevateKafkaException('clientId is required')
		if (!brokers) throw new ElevateKafkaException('brokers are required')
		if (!packageName) throw new ElevateKafkaException('packageName is required')

		this.clientId = clientId
		this.brokers = brokers.split(',')
		this.packageName = packageName

		try {
			if (ElevateKafka.kafkaClients.has(packageName))
				throw new ElevateKafkaException('A package can only initialize one ElevateKafka Client')

			this.kafkaClient = new Kafka({
				clientId: this.clientId,
				brokers: this.brokers,
				connectionTimeout: connectionTimeout || 60000,
				retry: {
					initialRetryTime: initialRetryTime || 1000,
					retries: retries || 8,
				},
			})

			ElevateKafka.kafkaClients.set(packageName, this.kafkaClients)
			console.log(`[${this.packageName}] Kafka client created successfully`)
		} catch (error) {
			const errMsg = `Failed to create Kafka client: ${error.message}` //Maybe add the time and date for better logging
			console.error(`[${this.packageName}] ${errMsg}`)
			throw new ElevateKafkaException(errMsg)
		}

		this.producer = null
	}

	async #createProducer() {
		if (!this.producer) {
			try {
				this.producer = this.kafkaClient.producer()
				await this.producer.connect()
				this.producer.on('producer.connect', () =>
					console.log(`[${this.packageName}] Kafka Producer Connected`)
				)
				this.producer.on('producer.disconnect', () => {
					console.log(`[${this.packageName}] Kafka Producer Disconnected`)
					this.producer = null
				})
			} catch (error) {
				const errMsg = `Failed to connect producer: ${error.message}`
				console.error(`[${this.packageName}] ${errMsg}`)
				throw new ElevateKafkaException(errMsg)
			}
		}
	}

	async #sendMessage(topic, key, value) {
		if (!topic || !key || !value) {
			const errMsg = 'Topic, key, and value are required to send a message'
			console.error(`[${this.packageName}] ${errMsg}`)
			throw new ElevateKafkaException(errMsg)
		}
		try {
			const res = await this.producer.send({
				topic,
				messages: [
					{
						key,
						value: JSON.stringify(value),
					},
				],
			})
			console.log(`[${this.packageName}] Message enqueued to topic ${topic.toUpperCase()}`)
			return res
		} catch (error) {
			const errMsg = `Failed to send message: ${error.message}`
			console.error(`[${this.packageName}] ${errMsg}`)
			throw new ElevateKafkaException(errMsg)
		}
	}

	async enqueueMessage(topic, key, value) {
		await this.#createProducer()
		return await this.#sendMessage(topic, key, value)
	}

	enqueueMessageWithTopic(topic) {
		return async (key, value) => {
			await this.#createProducer()
			return await this.#sendMessage(topic, key, value)
		}
	}

	async createConsumer(groupId, topics) {
		if (ElevateKafka.consumers.has(groupId)) {
			const errMsg = 'Consumer with specified groupId exists for this instance'
			console.error(`[${this.packageName}] ${errMsg}`)
			throw new ElevateKafkaException(errMsg)
		}
		try {
			const consumer = this.kafkaClient.consumer({ groupId })
			ElevateKafka.consumers.set(groupId, consumer)
			consumer.on('consumer.connect', () => console.log(`[${this.packageName}] Kafka Consumer Connected`))
			consumer.on('consumer.disconnect', () => {
				console.log(`[${this.packageName}] Kafka Consumer Disconnected`)
				ElevateKafka.consumers.delete(groupId)
			})
			await consumer.connect()
			await consumer.subscribe({ topics })
			return consumer
		} catch (error) {
			const errMsg = `Failed to create consumer: ${error.message}`
			console.error(`[${this.packageName}] ${errMsg}`)
			throw new ElevateKafkaException(errMsg)
		}
	}

	async runConsumer(
		consumer,
		messageProcessorFn = async (topic, message) => {
			console.log({ topic, message })
		}
	) {
		try {
			await consumer.run({
				eachMessage: async ({ topic, message }) => {
					try {
						await messageProcessorFn(topic, message)
					} catch (error) {
						console.error(`Error in message processor: ${error.message}`)
					}
				},
			})
		} catch (error) {
			const errMsg = `Error running consumer: ${error.message}`
			console.error(`[${this.packageName}] ${errMsg}`)
			throw new ElevateKafkaException(errMsg)
		}
	}
}

module.exports = { ElevateKafka, ElevateKafkaException }
