const express = require('express')
const router = express.Router()
const routes = require('./constants/routes')
const packageRouter = require('./router')

const getDependencies = () => {
	return ['kafka', 'kafka-connect']
}

const getPackageMeta = () => {
	return {
		basePackageName: 'survey',
		packageName: 'elevate-survey-observation',
	}
}

const createPackage = (options) => {
	return {
		router: () => {
			console.log('router')
		},
		endpoints: [],
		dependencies: [],
	}
}

router.get('/', (req, res) => {
	res.send('Hello, world! From Elevate Survey')
})

module.exports = {
	dependencies: getDependencies(),
	routes,
	createPackage,
	packageMeta: getPackageMeta(),
	packageRouter,
}
