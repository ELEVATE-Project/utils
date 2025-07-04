/**
 * name : gotenberg.js
 * author : Mallanagouda R Biradar
 * created-date : 30-June-2025
 * Description : Gotenberg health check functionality.
 */
const axios = require('axios');

exports.check = async (url) => {
	try {
		// Gotenberg exposes a /health endpoint for basic liveness check
		const response = await axios.get(`${url}/health`);
		return response.status === 200;
	} catch (error) {
		return false;
	}
};
