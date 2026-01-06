/**
 * name : bullmq.js
 * author : Mallanagouda R Biradar
 * created-date : 15-July-2025
 * Description : BullMQ health check functionality using Redis connection.
 */

const { Queue } = require('bullmq');

exports.check = async (host, port) => {
	const connection = {
		host,
		port: parseInt(port, 10),
	};

	const queue = new Queue('__health_check_queue__', { connection });

	try {
		await queue.waitUntilReady();
		await queue.close();
		return true;
	} catch (error) {
		if (queue) await queue.close().catch(() => {});
		return false;
	}
};
