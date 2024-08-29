module.exports = {
	routes: [
		{
			sourceRoute: '/entity-management/v1/entityTypes/bulkCreate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entityTypes/bulkCreate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entityTypes/bulkUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entityTypes/bulkUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entityTypes/find',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entityTypes/find',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entityTypes/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entityTypes/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entityTypes/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entityTypes/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entityTypes/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entityTypes/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entityTypes/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entityTypes/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/bulkCreate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/bulkCreate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/entityListBasedOnEntityType',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/entityListBasedOnEntityType',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/mappingUpload',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/mappingUpload',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/bulkUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/bulkUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/add',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/add',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/userRoleExtension/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/userRoleExtension/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/userRoleExtension/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/userRoleExtension/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/userRoleExtension/find',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/userRoleExtension/find',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/userRoleExtension/delete/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/userRoleExtension/delete/:id',
				type: 'DELETE'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/targetedRoles/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/targetedRoles/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/list/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/list/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/find',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/find',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/details',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/details/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/listByEntityType',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/listByEntityType',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/listByEntityType/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/listByEntityType/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/subEntityList',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/subEntityList',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/subEntityList/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/subEntityList/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/listByIds',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/listByIds',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/listByLocationIds',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/listByLocationIds',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/relatedEntities',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/relatedEntities',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/entity-management/v1/entities/relatedEntities/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/entity-management/v1/entities/relatedEntities/:id',
				type: 'GET'
			},
		},


	],
}

/* const fs = require('fs')
const modifiedArray = [].map((item) => ({
	...item,
	targetRoute: {
		path: item.sourceRoute,
		type: item.type,
	},
}))
const modifiedArrayJSON = JSON.stringify(modifiedArray, null, 2)
const filePath = 'modifiedArray.json'
fs.writeFile(filePath, modifiedArrayJSON, 'utf8', (err) => {
	if (err) {
		console.error('Error writing to file:', err)
	} else {
		console.log('Modified array has been written to', filePath)
	}
}) */
