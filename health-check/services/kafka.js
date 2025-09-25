/**
 * name : kafka.js
 * author : Vishnu
 * created-date : 25-june-2025
 * Description : Kafka health check functionality (send + receive).
 */

const kafka = require('kafka-node');
const { v4: uuidv4 } = require('uuid');

function ensureTopicExists(client, topicName) {
	return new Promise((resolve, reject) => {
		client.loadMetadataForTopics([], (error, results) => {
			if (error) {
				console.error('[Kafka Health Check] Failed to load topic metadata:', error);
				return reject(error);
			}

			const topics = results[1]?.metadata || {};
			const existingTopics = Object.keys(topics);

			if (existingTopics.includes(topicName)) {
				console.log(`[Kafka Health Check] Topic '${topicName}' already exists.`);
				return resolve();
			}

			console.log(`[Kafka Health Check] Topic '${topicName}' not found. Creating...`);
			client.createTopics(
				[
					{
						topic: topicName,
						partitions: 1,
						replicationFactor: 1,
					},
				],
				(error, result) => {
					if (error) {
						console.error('[Kafka Health Check] Topic creation failed:', error);
						return reject(error);
					}
					console.log('[Kafka Health Check] Topic created:', result);
					resolve();
				}
			);
		});
	});
}

async function check(kafkaUrl,topicName,groupId) {
	return new Promise(async (resolve) => {
		const pidSuffix = `-${process.pid}`;
		const uniqueTopicName = `${topicName}${pidSuffix}`;
		const uniqueGroupId = `${groupId}${pidSuffix}`;
		console.log(`[Kafka Health Check] Connecting to Kafka at ${kafkaUrl}`);
		const client = new kafka.KafkaClient({ kafkaHost: kafkaUrl });

		try {
			await ensureTopicExists(client, uniqueTopicName);
		} catch (err) {
			client.close();
			return resolve(false);
		}

		const messageId = `health-check-${uuidv4()}`;
		const payloads = [
			{
				topic: uniqueTopicName,
				messages: messageId,
			},
		];

		const producer = new kafka.Producer(client);

		producer.on('ready', () => {
			console.log(`[Kafka Health Check] Producer ready. Sending message: ${messageId}`);

			producer.send(payloads, (err, data) => {
				if (err) {
					console.error('[Kafka Health Check] Error sending message:', err);
					client.close();
					return resolve(false);
				}

				console.log('[Kafka Health Check] Message sent:', data);

				const consumer = new kafka.Consumer(
					client,
					[{ topic: uniqueTopicName, partition: 0 }],
					{
						groupId: uniqueGroupId, 
						fromOffset: false,
					}
				);

				const timeout = setTimeout(() => {
					console.error('[Kafka Health Check] Timed out waiting for message');
					consumer.close(true, () => {
						client.close();
						resolve(false);
					});
				}, 10000); 

				consumer.on('message', (message) => {
					console.log('[Kafka Health Check] Received message:', message.value);
					if (message.value === messageId) {
						clearTimeout(timeout);
						consumer.close(true, () => {
							client.close();
							resolve(true);
						});
					}
				});

				consumer.on('error', (err) => {
					console.error('[Kafka Health Check] Consumer error:', err);
					clearTimeout(timeout);
					consumer.close(true, () => {
						client.close();
						resolve(false);
					});
				});
			});
		});

		producer.on('error', (err) => {
			console.error('[Kafka Health Check] Producer error:', err);
			client.close();
			return resolve(false);
		});
	});
}

module.exports = {
	check,
};


