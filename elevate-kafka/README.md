# ElevateKafka NPM Package Documentation

## Overview

The `ElevateKafka` package provides a simplified interface for interacting with Apache Kafka using the `kafkajs` library. It allows for easy creation and management of Kafka producers and consumers, and includes custom error handling.

## Installation

To install the `ElevateKafka` package, use npm:

```bash
npm install elevate-kafka
```

## Usage

### Importing the Package

To use the `ElevateKafka` package, import it into your project:

```javascript
const { ElevateKafka } = require('elevate-kafka')
```

### Creating an Instance

To create an instance of `ElevateKafka`, you need to provide a `clientId`, `brokers`, and `packageName`. Optional parameters include `connectionTimeout`, `initialRetryTime`, and `retries`.

```javascript
const kafka = new ElevateKafka('my-client-id', 'broker1,broker2', {
	connectionTimeout: 60000,
	initialRetryTime: 1000,
	retries: 8,
	packageName: 'my-package',
})
```

### Enqueueing Messages

To send messages to a Kafka topic, use the `enqueueMessage` method. This method requires the `topic`, `key`, and `value` parameters.

```javascript
const topic = 'my-topic'
const key = 'my-key'
const value = { data: 'my-data' }

async function sendMessage() {
	try {
		const response = await kafka.enqueueMessage(topic, key, value)
		console.log('Message sent:', response)
	} catch (error) {
		console.error('Error sending message:', error)
	}
}

sendMessage()
```

Alternatively, you can create a function for a specific topic using `enqueueMessageWithTopic`.

```javascript
const enqueueToMyTopic = kafka.enqueueMessageWithTopic('my-topic')

async function sendMessage() {
	try {
		const response = await enqueueToMyTopic('my-key', { data: 'my-data' })
		console.log('Message sent:', response)
	} catch (error) {
		console.error('Error sending message:', error)
	}
}

sendMessage()
```

### Creating a Consumer

To create a Kafka consumer, use the `createConsumer` method. This method requires a `groupId` and a list of `topics`.

```javascript
const groupId = 'my-group-id'
const topics = ['topic1', 'topic2']

async function createAndRunConsumer() {
	try {
		const consumer = await kafka.createConsumer(groupId, topics)
		console.log('Consumer created')

		await kafka.runConsumer(consumer, async (topic, message) => {
			console.log(`Received message on topic ${topic}:`, message)
		})
	} catch (error) {
		console.error('Error creating consumer:', error)
	}
}

createAndRunConsumer()
```

### Error Handling

The package includes custom error handling through the `ElevateKafkaException` class. Errors thrown by the package will include this custom exception.

```javascript
const { ElevateKafka, ElevateKafkaException } = require('elevate-kafka')

try {
	// Code that might throw an error
} catch (error) {
	if (error instanceof ElevateKafkaException) {
		console.error('ElevateKafka error:', error.message)
	} else {
		console.error('Unexpected error:', error)
	}
}
```

## API Reference

### Class: `ElevateKafka`

#### `constructor(clientId, brokers, options)`

-   `clientId` (string): The client ID for the Kafka client.
-   `brokers` (string): A comma-separated list of Kafka brokers.
-   `options` (object):
    -   `connectionTimeout` (number): Connection timeout in milliseconds (default: 60000).
    -   `initialRetryTime` (number): Initial retry time in milliseconds (default: 1000).
    -   `retries` (number): Number of retries (default: 8).
    -   `packageName` (string): The name of the package.

#### `enqueueMessage(topic, key, value)`

-   `topic` (string): The Kafka topic to send the message to.
-   `key` (string): The key of the message.
-   `value` (object): The value of the message.

Returns a promise that resolves with the result of the send operation.

#### `enqueueMessageWithTopic(topic)`

-   `topic` (string): The Kafka topic to send the message to.

Returns a function that accepts `key` and `value` parameters to send messages to the specified topic.

#### `createConsumer(groupId, topics)`

-   `groupId` (string): The group ID for the Kafka consumer.
-   `topics` (array): A list of topics to subscribe to.

Returns a promise that resolves with the created consumer.

#### `runConsumer(consumer, messageProcessorFn)`

-   `consumer` (object): The Kafka consumer instance.
-   `messageProcessorFn` (function): A function to process each message. Receives `topic` and `message` as parameters.

Returns a promise that resolves when the consumer is running.

### Custom Error: `ElevateKafkaException`

Custom error class for handling Kafka-related exceptions in the package.

## Example

Here's a complete example of using the `ElevateKafka` package:

```javascript
const { ElevateKafka } = require('elevate-kafka')

const kafka = new ElevateKafka('my-client-id', 'broker1,broker2', {
	connectionTimeout: 60000,
	initialRetryTime: 1000,
	retries: 8,
	packageName: 'my-package',
})

const topic = 'my-topic'
const key = 'my-key'
const value = { data: 'my-data' }

async function sendMessage() {
	try {
		const response = await kafka.enqueueMessage(topic, key, value)
		console.log('Message sent:', response)
	} catch (error) {
		console.error('Error sending message:', error)
	}
}

sendMessage()

const groupId = 'my-group-id'
const topics = ['topic1', 'topic2']

async function createAndRunConsumer() {
	try {
		const consumer = await kafka.createConsumer(groupId, topics)
		console.log('Consumer created')

		await kafka.runConsumer(consumer, async (topic, message) => {
			console.log(`Received message on topic ${topic}:`, message)
		})
	} catch (error) {
		console.error('Error creating consumer:', error)
	}
}

createAndRunConsumer()
```

## License

This package is licensed under the MIT License. See the LICENSE file for more information.
