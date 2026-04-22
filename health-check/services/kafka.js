/**
 * name : kafka.js
 * author : Vishnu
 * created-date : 25-june-2025
 * Description : Kafka health check functionality (send + receive + topic cleanup).
 */

const kafka = require('kafka-node')
const { Kafka } = require('kafkajs')
const { v4: uuidv4 } = require('uuid')

// Use environment variable or default to false
const DEBUG_MODE = process.env.HEALTH_CHECK_DEBUG_MODE === 'true' ? true : false

/**
 * Ensure the given Kafka topic exists or create it.
 */
async function ensureTopicExists(client, topicName) {
	return new Promise((resolve, reject) => {
		client.loadMetadataForTopics([], (error, results) => {
			if (error) {
				if (DEBUG_MODE) {
					console.error('[Kafka Health Check] Metadata load error:', error)
				}
				return reject(error)
			}

			const topics = results?.[1]?.metadata || {}
			if (topics[topicName]) {
				if (DEBUG_MODE) {
					console.log(`[Kafka Health Check] Topic '${topicName}' exists ✅`)
				}
				return resolve(true)
			}

			if (DEBUG_MODE) {
				console.log(`[Kafka Health Check] Topic '${topicName}' not found. Creating... ⏳`)
			}

			client.createTopics(
				[{ topic: topicName, partitions: 1, replicationFactor: 1 }],
				(err) => {
					if (err) return reject(err)

					if (DEBUG_MODE) {
						console.log(`[Kafka Health Check] Topic '${topicName}' created`)
					}

					resolve(true)
				}
			)
		})
	})
}

/**
 * Delete topic using KafkaJS
 */
async function deleteTopic(kafkaUrl, topicName) {
	try {
		const kafkaClient = new Kafka({
			brokers: [kafkaUrl],
		})

		const admin = kafkaClient.admin()

		await admin.connect()

		await admin.deleteTopics({
			topics: [topicName],
		})

		await admin.disconnect()

		if (DEBUG_MODE) {
			console.log(`[Kafka Health Check] Topic '${topicName}' deleted`)
		}

		return true
	} catch (error) {
		if (DEBUG_MODE) {
			console.error(
				`[Kafka Health Check] Failed to delete topic '${topicName}':`,
				error.message
			)
		}
		return false
	}
}

/**
 * Kafka health check
 */
async function check(kafkaUrl, topicName, groupId, sendReceive = false) {
	return new Promise(async (resolve) => {
		const pidSuffix = `-${process.pid}`
		const uniqueTopicName = `${topicName}${pidSuffix}`
		const uniqueGroupId = `${groupId}${pidSuffix}`

		let client
		let producer
		let consumer
		let resolved = false

		const cleanup = async (val) => {
			if (resolved) return
			resolved = true
			try {
				if (consumer) consumer.close(true)
				if (client) client.close()

				// Delete topic after successful health check
				if (val === true) {
					await deleteTopic(kafkaUrl, uniqueTopicName)
				}
			} catch (e) {
				if (DEBUG_MODE) {
					console.error('[Kafka Health Check] Cleanup error:', e.message)
				}
			}
			resolve(val)
		}

		try {
			if (DEBUG_MODE) {
				console.log(`[Kafka Health Check] Connecting to Kafka at ${kafkaUrl}`)
			}
			client = new kafka.KafkaClient({ kafkaHost: kafkaUrl })

			// Step 1: Ensure topic exists
			await ensureTopicExists(client, uniqueTopicName)

			if (!sendReceive) {
				if (DEBUG_MODE) {
					console.log('[Kafka Health Check] Topic check complete.')
				}
				return cleanup(true)
			}

			// Step 2: Setup producer
			producer = new kafka.Producer(client)
			await new Promise((res, rej) => {
				producer.on('ready', res)
				producer.on('error', rej)
			})

			// Step 3: Send message
			const messageId = `health-check-${uuidv4()}`

			const payloads = [
				{
					topic: uniqueTopicName,
					messages: messageId,
				},
			]

			await new Promise((res, rej) => {
				producer.send(payloads, (err) => {
					if (err) return rej(err)
					if (DEBUG_MODE) {
						console.log(`[Kafka Health Check] Sent message: ${messageId}`)
					}
					res()
				})
			})

			// Step 4: create consumer
			consumer = new kafka.Consumer(
				client,
				[{ topic: uniqueTopicName, partition: 0 }],
				{
					groupId: uniqueGroupId,
					autoCommit: true,
					fromOffset: false,
				}
			)

			let received = false
			const receiveTimeout = setTimeout(() => {
				if (!received) {
					if (DEBUG_MODE) {
						console.error('[Kafka Health Check] Message not received in time')
					}
					cleanup(false)
				}
			}, 5000)

			consumer.on('message', (message) => {
				if (message.value === messageId) {
					received = true

					clearTimeout(receiveTimeout)
					if (DEBUG_MODE) {
						console.log('[Kafka Health Check] Message received')
					}
					cleanup(true)
				}
			})

			consumer.on('error', (err) => {
				if (DEBUG_MODE) {
					console.error('[Kafka Health Check] Consumer error:', err.message)
				}
				clearTimeout(receiveTimeout)
				cleanup(false)
			})
		} catch (err) {
			if (DEBUG_MODE) {
				console.error('[Kafka Health Check] Health check failed:', err.message)
			}
			cleanup(false)
		}
	})
}

module.exports = { check }
