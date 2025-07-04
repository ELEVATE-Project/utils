/**
 * name : redis.js
 * author : Mallanagouda R Biradar
 * created-date : 30-June-2025
 * Description : Redis health check functionality.
 */
const { createClient } = require('redis');

exports.check = async (url) => {
	const client = createClient({ url });

	try {
		await client.connect();
		await client.ping();
		await client.quit();
		return true;
	} catch (error) {
		if (client.isOpen) await client.quit();
		return false;
	}
};
