module.exports = {
	routes: [
		{
			sourceRoute: '/survey/v1/admin/createIndex/solutions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/admin/createIndex/solutions',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/admin/createIndex/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/admin/createIndex/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/polls/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/polls/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/polls/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/polls/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/polls/getPollQuestions/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/polls/getPollQuestions/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/pollSubmissions/make/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/pollSubmissions/make/:id',
				type: 'POST'
			},
		},	
		{
			sourceRoute: '/survey/v1/files/preSignedUrls',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/files/preSignedUrls',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/files/getDownloadableUrl',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/files/getDownloadableUrl',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/reports/submissionReport',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/reports/submissionReport',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/reports/fetch',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/reports/fetch',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/details/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/details/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/details',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/details',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/verifyLink',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/verifyLink',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/verifyLink/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/verifyLink/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/fetchLink',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/fetchLink',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/fetchLink/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/fetchLink/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/getDetails',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/getDetails',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/getDetails/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/getDetails/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/isTargetedBasedOnUserProfile',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/isTargetedBasedOnUserProfile',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/isTargetedBasedOnUserProfile/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/isTargetedBasedOnUserProfile/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/detailsBasedOnRoleAndLocation/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/detailsBasedOnRoleAndLocation/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/detailsBasedOnRoleAndLocation/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/detailsBasedOnRoleAndLocation/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/forUserRoleAndLocation',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/forUserRoleAndLocation',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/addEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/addEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/addEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/addEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/addRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/addRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/addRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/addRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/removeEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/removeEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/removeEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/removeEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/removeRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/removeRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/removeRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/removeRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/targetedSolutions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/targetedSolutions',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/addEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/addEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/addEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/addEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/addRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/addRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/addRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/addRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/removeEntitiesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/removeEntitiesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/removeEntitiesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/removeEntitiesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/removeRolesInScope',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/removeRolesInScope',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/removeRolesInScope/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/removeRolesInScope/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/join',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/join',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/join/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/join/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/details',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/details',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/details/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/details/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/list',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/list',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/importSurveryTemplateToSolution/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/importSurveryTemplateToSolution/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/importSurveryTemplateToSolution',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/importSurveryTemplateToSolution',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/getLink/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/getLink/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/getLink/',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/getLink/',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/createSolutionTemplate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/createSolutionTemplate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/mapSurverySolutionToProgram/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/mapSurverySolutionToProgram/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/mapSurverySolutionToProgram',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/mapSurverySolutionToProgram',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/userAssigned',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/userAssigned',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/details/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/details/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveys/details',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/details',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveySubmissions/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveySubmissions/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveySubmissions/getStatus/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/getStatus/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/surveySubmissions/getStatus',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/getStatus',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/surveySubmissions/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/list',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/surveySubmissions/isAllowed/:id',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/isAllowed/:id',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/surveySubmissions/isAllowed',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/isAllowed',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/questions/bulkCreate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/questions/bulkCreate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/entities',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/entities',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/updateEntities',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/updateEntities',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/updateEntities/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/updateEntities/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/assessment',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/assessment',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/assessment/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/assessment/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/criteria/upload',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/criteria/upload',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/frameworks/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/frameworks/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/frameworks/uploadThemes',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/frameworks/uploadThemes',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/frameworks/uploadThemes/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/frameworks/uploadThemes/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/importFromFramework',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/importFromFramework',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/uploadCriteriaRubricExpressions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/uploadCriteriaRubricExpressions',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/uploadCriteriaRubricExpressions/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/uploadCriteriaRubricExpressions/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/importFromSolution',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/importFromSolution',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/programs/targetedPrograms',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/programs/targetedPrograms',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/uploadThemesRubricExpressions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/uploadThemesRubricExpressions',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutions/uploadThemesRubricExpressions/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/uploadThemesRubricExpressions/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/entities',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/entities',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/searchEntities',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/searchEntities',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/assessment',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/assessment',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/assessment/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/assessment/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/updateEntities',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/updateEntities',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/updateEntities/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/updateEntities/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/list',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/targetedEntity',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/targetedEntity',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observations/targetedEntity/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/targetedEntity/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/update',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/update',
				type: 'DELETE'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/update/:id',
			type: 'DELETE',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/update/:id',
				type: 'DELETE'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/list',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/list/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/list/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/solutionList',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/solutionList',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/observationSubmissions/create/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/create/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/admin/dbFind/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/admin/dbFind/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutionDetails/criteria/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutionDetails/criteria/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/solutionDetails/criteria',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutionDetails/criteria',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/forms/find',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/forms/find',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/forms/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/forms/create',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/forms/read',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/forms/read',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/forms/read/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/forms/read/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/forms/update',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/forms/update',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/forms/update/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/forms/update/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/profile/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/profile/read',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/configurations/read',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/configurations/read',
				type: 'GET'
			},
		},
		{
			sourceRoute: '/survey/v1/configurations/createOrUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/configurations/createOrUpdate',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/users/programs',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/users/programs',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/users/solutions/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/users/solutions/:id',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/survey/v1/users/solutions',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/users/solutions',
				type: 'POST'
			},
		},
		{
			sourceRoute: '/interface/v1/internal/getAllPublishedResources',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/samiksha/v1/admin/dbFind/solutions',
				type: 'POST',
				functionName: 'fetchObserbationAndSurvey',
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
