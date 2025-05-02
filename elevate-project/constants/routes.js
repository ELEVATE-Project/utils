module.exports = {
	routes: [
		{
			sourceRoute: '/project/v1/userProjects/sync',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/sync',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/sync/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/sync/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/addStory/:id',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/addStory/:id',
				type: 'PUT'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/addStory',
			type: 'PUT',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/addStory',
				type: 'PUT'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/details',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/details',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/details/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/details/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/verifyCertificate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/verifyCertificate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/certificateCallback',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/certificateCallback',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/certificateCallbackError',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/certificateCallbackError',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/verifyCertificate/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/verifyCertificate/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/certificateReIssue',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/certificateReIssue',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/certificateReIssue/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/certificateReIssue/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/certificateBaseTemplates/createOrUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/certificateBaseTemplates/createOrUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/certificateBaseTemplates/createOrUpdate/:id',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/certificateBaseTemplates/createOrUpdate/:id',
				type: 'PATCH'
			},
		},
		{
			sourceRoute: '/project/v1/certificateTemplates/createOrUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/certificateTemplates/createOrUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/certificateTemplates/createOrUpdate/:id',
			type: 'PATCH',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/certificateTemplates/createOrUpdate/:id',
				type: 'PATCH'
			},
		},
		{
			sourceRoute: '/project/v1/certificateTemplates/uploadTemplate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/certificateTemplates/uploadTemplate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/certificateTemplates/uploadTemplate/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/certificateTemplates/uploadTemplate/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/certificateTemplates/createSvg',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/certificateTemplates/createSvg',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/certificates',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/certificates',
				type: 'GET'
			},
		},		{
			sourceRoute: '/project/v1/configurations/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/configurations/read',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/tasksStatus',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/tasksStatus',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/tasksStatus/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/tasksStatus/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/add',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/add',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/userAssigned',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/userAssigned',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/share',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/share',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/share/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/share/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/importedProjects',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/importedProjects',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/importedProjects/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/importedProjects/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/profile/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/profile/read',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/userProjects/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/list',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/cloud-services/files/download',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/cloud-services/files/download',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/cloud-services/files/preSignedUrls',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/cloud-services/files/preSignedUrls',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/cloud-services/files/getDownloadableUrl',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/cloud-services/files/getDownloadableUrl',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/dataPipeline/userProject',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/dataPipeline/userProject',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/dataPipeline/userProject/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/dataPipeline/userProject/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/bulkCreate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/bulkCreate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/bulkUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/bulkUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/importProjectTemplate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/importProjectTemplate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/importProjectTemplate/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/importProjectTemplate/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/listByIds',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/listByIds',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/details',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/details/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templates/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templates/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/bulkCreate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/bulkCreate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/bulkCreate/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/bulkCreate/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/bulkUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/bulkUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/bulkUpdate/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/bulkUpdate/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/project/templateTasks/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/project/templateTasks/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/projects',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/projects',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/projects/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/projects/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/library/categories/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/library/categories/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/details',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/details/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/addRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/addRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/addRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/addRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/removeRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/removeRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/removeRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/removeRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/addEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/addEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/addEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/addEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/removeEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/removeEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/removeEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/removeEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/programs/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/join',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/join',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/join/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/join/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/programs/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/programs/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/solutions/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/create',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute:{
				path: '/project/v1/solutions/update',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute:{
				path: '/project/v1/solutions/update/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/list',
				type: 'POST'
			}
		},	
		{
			sourceRoute: '/project/v1/solutions/forUserRoleAndLocation',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/forUserRoleAndLocation',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/detailsBasedOnRoleAndLocation',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/detailsBasedOnRoleAndLocation',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/detailsBasedOnRoleAndLocation/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/detailsBasedOnRoleAndLocation/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/addRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/addRolesInScope',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/addRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/addRolesInScope/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/addEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/addEntitiesInScope',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/addEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/addEntitiesInScope/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/removeRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/removeRolesInScope',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/removeRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/removeRolesInScope/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/targetedSolutions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/targetedSolutions',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/fetchLink',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/fetchLink',
				type: 'GET'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/fetchLink/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/fetchLink/:id',
				type: 'GET'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/verifyLink',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/verifyLink',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/verifyLink/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/verifyLink/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/verifySolution/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/verifySolution/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/getDetails',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/getDetails',
				type: 'GET'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/getDetails/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/getDetails/:id',
				type: 'GET'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/removeEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/removeEntitiesInScope',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/solutions/removeEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/removeEntitiesInScope/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/userProjects/importFromLibrary',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/importFromLibrary',
				type: 'POST'
			}
		},	
		{
			sourceRoute: '/project/v1/userProjects/importFromLibrary/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/importFromLibrary/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/userProjects/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/update',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/userProjects/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/userProjects/update/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/forms/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/forms/create',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/forms/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/forms/update',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/forms/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/forms/update/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/forms/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/forms/read',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/forms/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/forms/read/:id',
				type: 'POST'
			}
		},
		{
			sourceRoute: '/project/v1/admin/dbFind',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/admin/dbFind',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/admin/dbFind/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/admin/dbFind/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/reports/getProgramsByEntity/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/reports/getProgramsByEntity/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/reports/getProgramsByEntity',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/reports/getProgramsByEntity',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/reports/entity/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/reports/entity/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/reports/entity',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/reports/entity',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/reports/detailView',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/reports/detailView',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/reports/detailView/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/reports/detailView/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/admin/createIndex',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/admin/createIndex',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/admin/createIndex/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/admin/createIndex/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/solutions/details',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/details',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/solutions/details/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/solutions/details/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/interface/v1/internal/getAllPublishedResources',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/project/v1/admin/dbFind/projectTemplates',
				type: 'POST',
				functionName: 'fetchProjectTemplates',
			},
		},
		{
			sourceRoute: '/project/v1/users/solutions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/users/solutions',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/users/solutions/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/users/solutions/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/users/programs',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/users/programs',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/projectAttributes/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/projectAttributes/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/projectAttributes/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/projectAttributes/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/projectAttributes/find',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/projectAttributes/find',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/wishlist/add/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/wishlist/add/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/wishlist/add',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/wishlist/add',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/wishlist/remove/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/wishlist/remove/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/wishlist/remove',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/wishlist/remove',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/project/v1/wishlist/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/wishlist/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/template/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/template/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/project/v1/scp/publishTemplateAndTasks',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/project/v1/scp/publishTemplateAndTasks',
				type: 'POST'
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
