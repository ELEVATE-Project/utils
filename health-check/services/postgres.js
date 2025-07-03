/**
 * name : postgres.js
 * author : Mallanagouda R Biradar
 * created-date : 30-June-2025
 * Description : PostgreSQL health check functionality.
 */
const { Client } = require('pg');

exports.check = async (url) => {
	const client = new Client({ connectionString: url });
	try {
		await client.connect();
		await client.query('SELECT 1'); // simple query to check connectivity
		await client.end();
		return true;
	} catch (error) {
		console.error('PostgreSQL Health Check Error:', error.message);
		if (client && client.end) await client.end();
		return false;
	}
};
