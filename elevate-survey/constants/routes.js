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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/files/download',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/files/download',
				type: 'GET'
			},
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/solutions/list',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/solutions/list',
				type: 'POST'
			},
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/surveys/importSurveyTemplateToSolution/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/importSurveyTemplateToSolution/:id',
				type: 'POST'
			},
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/surveys/importSurveyTemplateToSolution',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/importSurveyTemplateToSolution',
				type: 'POST'
			},
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/surveys/mapSurveySolutionToProgram/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/mapSurveySolutionToProgram/:id',
				type: 'POST'
			},
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/surveys/mapSurveySolutionToProgram',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveys/mapSurveySolutionToProgram',
				type: 'POST'
			},
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/observations/create',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observations/create',
				type: 'POST'
			},
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/observationSubmissions/pushCompletedObservationSubmissionForReporting/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/pushCompletedObservationSubmissionForReporting/:id',
				type: 'POST'
			},
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/observationSubmissions/pushCompletedObservationSubmissionForReporting',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/pushCompletedObservationSubmissionForReporting',
				type: 'POST'
			},
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/observationSubmissions/pushInCompleteObservationSubmissionForReporting/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/pushInCompleteObservationSubmissionForReporting/:id',
				type: 'POST'
			},
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/observationSubmissions/pushInCompleteObservationSubmissionForReporting',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/observationSubmissions/pushInCompleteObservationSubmissionForReporting',
				type: 'POST'
			},
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/surveySubmissions/pushCompletedSurveySubmissionForReporting/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/pushCompletedSurveySubmissionForReporting/:id',
				type: 'POST'
			},
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/surveySubmissions/pushCompletedSurveySubmissionForReporting',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/pushCompletedSurveySubmissionForReporting',
				type: 'POST'
			},
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/surveySubmissions/pushInCompleteSurveySubmissionForReporting/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/pushInCompleteSurveySubmissionForReporting/:id',
				type: 'POST'
			},
			service:"survey"
		},
        {
			sourceRoute: '/survey/v1/surveySubmissions/pushInCompleteSurveySubmissionForReporting',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/surveySubmissions/pushInCompleteSurveySubmissionForReporting',
				type: 'POST'
			},
			service:"survey"
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
			service:"survey"
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
			service:"survey"
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
			service:"survey"
		},
		{
            sourceRoute: "/user/v1/account/login",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/login",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/acceptTermsAndCondition",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/acceptTermsAndCondition",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/resetPassword",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/resetPassword",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/generateToken",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/generateToken",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/generateOtp",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/generateOtp",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/logout",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/logout",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/list",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/list",
                type: "GET",
                functionName: "accountsList"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/registrationOtp",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/registrationOtp",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/read/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/read/:id",
                type: "GET",
                functionName: "readUser"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/read",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/read",
                type: "GET",
                functionName: "readUser"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/update",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/update",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/setLanguagePreference",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/setLanguagePreference",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/share",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/share",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/share/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/share/:id",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user-role/list",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user-role/list",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user-role/default",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user-role/default",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user-role/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user-role/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user-role/update/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user-role/update/:id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user-role/delete/:id",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user-role/delete/:id",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/form/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/form/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/form/read",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/form/read",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/form/read/:id",
            type: "POST",
            targetRoute: {
                path: "/user/v1/form/read/:id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/form/update",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/form/update",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/cloud-services/file/getSignedUrl",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/cloud-services/file/getSignedUrl",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/cloud-services/file/getDownloadableUrl",
            type: "GET",
            targetRoute: {
                path: "/user/v1/cloud-services/file/getDownloadableUrl",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/deleteUser",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/deleteUser",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/deleteUser/:id",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/deleteUser/:id",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/login",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/login",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/organization/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/update",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/organization/update",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/update/:id",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/organization/update/:id",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/list",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/organization/list",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity-type/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity-type/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity-type/update",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity-type/update",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity-type/update/:id",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity-type/update/:id",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity-type/read",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity-type/read",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity-type/delete",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity-type/delete",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity-type/delete/:id",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity-type/delete/:id",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity/update",
            type: "PATCH",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity/update",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity/update/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity/update/:id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity/delete/:id",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity/delete/:id",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity/read",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity/read",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/entity/list",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/entity/list",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/inheritEntityType",
            type: "POST",
            targetRoute: {
                path: "/user/v1/org-admin/inheritEntityType",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/read",
            type: "GET",
            targetRoute: {
                path: "/user/v1/organization/read",
                type: "GET",
                functionName: "readOrganization"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/addOrgAdmin",
            type: "POST",
            targetRoute: {
                path: "/user/v1/admin/addOrgAdmin",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/bulkUserCreate",
            type: "POST",
            targetRoute: {
                path: "/user/v1/org-admin/bulkUserCreate",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/getBulkInvitesFilesList",
            type: "GET",
            targetRoute: {
                path: "/user/v1/org-admin/getBulkInvitesFilesList",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/getRequestDetails/:id",
            type: "GET",
            targetRoute: {
                path: "/user/v1/org-admin/getRequestDetails/:id",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/deactivateUser",
            type: "POST",
            targetRoute: {
                path: "/user/v1/org-admin/deactivateUser",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/getRequests",
            type: "POST",
            targetRoute: {
                path: "/user/v1/org-admin/getRequests",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/updateRequestStatus",
            type: "POST",
            targetRoute: {
                path: "/user/v1/org-admin/updateRequestStatus",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/requestOrgRole",
            type: "POST",
            targetRoute: {
                path: "/user/v1/organization/requestOrgRole",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/deactivateOrg/:id",
            type: "POST",
            targetRoute: {
                path: "/user/v1/admin/deactivateOrg/:id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/notification/create",
            type: "POST",
            targetRoute: {
                path: "/user/v1/notification/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/notification/update/:id",
            type: "PATCH",
            targetRoute: {
                path: "/user/v1/notification/update/:id",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/notification/read/:id",
            type: "GET",
            targetRoute: {
                path: "/user/v1/notification/read/:id",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/notification/read",
            type: "GET",
            targetRoute: {
                path: "/user/v1/notification/read",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/cloud-services/file/getSampleCSV",
            type: "GET",
            targetRoute: {
                path: "/user/v1/cloud-services/file/getSampleCSV",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/notification/template",
            type: "POST",
            targetRoute: {
                path: "/user/v1/notification/template",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/notification/template/:id",
            type: "GET",
            targetRoute: {
                path: "/user/v1/notification/template/:id",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/notification/template",
            type: "PATCH",
            targetRoute: {
                path: "/user/v1/notification/template",
                type: "PATCH"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/search",
            type: "POST",
            targetRoute: {
                path: "/user/v1/account/search",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/permissions/create",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/permissions/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/permissions/update/:id",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/permissions/update/:id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/permissions/list",
            type: "GET",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/permissions/list",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/permissions/delete/:id",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/permissions/delete/:id",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/modules/create",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/modules/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/modules/update/:id",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/modules/update/:id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/modules/list",
            type: "GET",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/modules/list",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/modules/delete/:id",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/modules/delete/:id",
                type: "DELETE"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/role-permission-mapping/delete/:role_id",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/role-permission-mapping/delete/:role_id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/role-permission-mapping/create/:role_id",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/role-permission-mapping/create/:role_id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/role-permission-mapping/list",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/role-permission-mapping/list",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/addRelatedOrg/:org_id",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/organization/addRelatedOrg/:org_id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/organization/removeRelatedOrg/:org_id",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/organization/removeRelatedOrg/:org_id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/changePassword",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/changePassword",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/validatingEmailIds",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/validatingEmailIds",
                type: "POST",
                functionName: "validateEmails"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/sessions",
            type: "GET",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/sessions",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/validateUserSession",
            type: "POST",
            priority: "MUST_HAVE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/validateUserSession",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/create",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/updateUser/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/org-admin/updateUser/:id",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/org-admin/updateUser",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/org-admin/updateUser",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/read",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/read",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/user/read/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/user/read/:id",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/account/searchByEmailIds",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/account/searchByEmailIds",
                type: "POST"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/triggerViewRebuild",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/triggerViewRebuild",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/triggerPeriodicViewRefresh",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/triggerPeriodicViewRefresh",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/triggerPeriodicViewRefreshInternal",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/triggerPeriodicViewRefreshInternal",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/user/v1/admin/triggerViewRebuildInternal",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/admin/triggerViewRebuildInternal",
                type: "GET"
            },
            service: "user"
        },
		{
            sourceRoute: "/user/v1/tenant/read",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/tenant/read",
                type: "GET"
            },
            service: "user"
        },
		{
            sourceRoute: "/user/v1/tenant/read/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/tenant/read/:id",
                type: "GET"
            },
            service: "user"
        },
        {
            sourceRoute: "/entity-management/v1/entityTypes/bulkCreate",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entityTypes/bulkCreate",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entityTypes/bulkUpdate",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entityTypes/bulkUpdate",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entityTypes/find",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entityTypes/find",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entityTypes/list",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entityTypes/list",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entityTypes/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entityTypes/create",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entityTypes/update",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entityTypes/update",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entityTypes/update/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entityTypes/update/:id",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/bulkCreate",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/bulkCreate",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/entityListBasedOnEntityType",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/entityListBasedOnEntityType",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/mappingUpload",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/mappingUpload",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/bulkUpdate",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/bulkUpdate",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/add",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/add",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/update",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/update",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/update/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/update/:id",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/userRoleExtension/create",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/userRoleExtension/create",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/userRoleExtension/update/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/userRoleExtension/update/:id",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/userRoleExtension/find",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/userRoleExtension/find",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/userRoleExtension/delete/:id",
            type: "DELETE",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/userRoleExtension/delete/:id",
                type: "DELETE"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/targetedRoles/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/targetedRoles/:id",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/list",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/list",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/list/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/list/:id",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/find",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/find",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/details",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/details",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/details/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/details/:id",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/listByEntityType",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/listByEntityType",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/listByEntityType/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/listByEntityType/:id",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/subEntityList",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/subEntityList",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/subEntityList/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/subEntityList/:id",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/listByIds",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/listByIds",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/subEntityListBasedOnRoleAndLocation/:id",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/listByLocationIds",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/listByLocationIds",
                type: "POST"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/relatedEntities",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/relatedEntities",
                type: "GET"
            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/relatedEntities/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/relatedEntities/:id",
                type: "GET"
            },
            service: "entity"
        },
        {
			sourceRoute: "/entity-management/v1/entities/createMappingCsv",
			type: "POST",
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: "/entity-management/v1/entities/createMappingCsv",
				type: "POST"
			},
            service: "entity"
		},
        {
            sourceRoute: "/notification/v1/email/send",
            type: "POST",
            targetRoute: {
                path: "/notification/v1/email/send",
                type: "POST"
            },
            service: "notification"
        },
        {
            sourceRoute: "/scheduler/jobs/create",
            type: "POST",
            targetRoute: {
                path: "/scheduler/jobs/create",
                type: "POST"
            },
            service: "scheduler"
        },
        {
            sourceRoute: "/scheduler/jobs/updateDelay",
            type: "POST",
            targetRoute: {
                path: "/scheduler/jobs/updateDelay",
                type: "POST"
            },
            service: "scheduler"
        },
        {
            sourceRoute: "/scheduler/jobs/remove",
            type: "POST",
            targetRoute: {
                path: "/scheduler/jobs/remove",
                type: "POST"
            },
            service: "scheduler"
        },
        {
            sourceRoute: "/scheduler/jobs/list",
            type: "GET",
            targetRoute: {
                path: "/scheduler/jobs/list",
                type: "GET"
            },
            service: "scheduler"
        },
        {
            sourceRoute: "/scheduler/jobs/purge",
            type: "POST",
            targetRoute: {
                path: "/scheduler/jobs/purge",
                type: "POST"
            },
            service: "scheduler"
        },
		{
			sourceRoute: '/survey/v1/users/deleteUserPIIData',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/users/deleteUserPIIData',
				type: 'POST'
			},
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/userExtension/bulkUpload',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/userExtension/bulkUpload',
				type: 'POST'
			},
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/userCourses/createOrUpdate',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/userCourses/createOrUpdate',
				type: 'POST'
			},
			service:"survey"
		},
		{
			sourceRoute: '/survey/v1/userCourses/delete',
			type: 'POST',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/survey/v1/userCourses/delete',
				type: 'POST'
			},
			service:"survey"
		},
		{
			sourceRoute: '/survey/health',
			type: 'GET',
			inSequence: false,
			orchestrated: false,
			targetRoute: {
				path: '/health',
				type: 'GET'
			},
			service:"survey"
		  },
		  {
            sourceRoute: "/entity-management/health",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/health",
                type: "GET"
            },
            service: "entity"
        },
		{
			sourceRoute: '/interface/v1/users/solutions',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/survey/v1/users/solutions',
				type: 'POST'
			},
			service:"survey"
		},
		{
			sourceRoute: '/interface/v1/users/solutions/:id',
			type: 'POST',
			inSequence: false,
			orchestrated: true,
			targetRoute: {
				path: '/survey/v1/users/solutions/:id',
				type: 'POST'
			},
			service:"survey"
		},
		{
            sourceRoute: "/survey/v1/admin/deleteResource",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/admin/deleteResource",
                type: "POST"
            },
            service: "survey"
        },
        {
            sourceRoute: "/survey/v1/admin/deleteResource/:id",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/admin/deleteResource/:id",
                type: "POST"
            },
            service: "survey"
        },

        {
            sourceRoute: "/survey/v1/library/categories/create",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/categories/create",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/library/categories/update",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/categories/update",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/library/categories/update/:id",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/categories/update/:id",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/library/categories/list",
            type: "GET",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/categories/list",
                type: "GET"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/library/surveys/list",
            type: "GET",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/surveys/list",
                type: "GET"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/library/observations/list",
            type: "GET",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/observations/list",
                type: "GET"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/library/observations/import",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/observations/import",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/library/observations/import/:id",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/library/observations/import/:id",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/organizationExtension/create",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/organizationExtension/create",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/organizationExtension/update",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/organizationExtension/update",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/organizationExtension/update/:id",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/organizationExtension/update/:id",
                type: "POST"
            },
            service: "survey"
        },
		{
            sourceRoute: "/survey/v1/organizationExtension/updateRelatedOrgs",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/survey/v1/organizationExtension/updateRelatedOrgs",
                type: "POST"
            },
            service: "survey"
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
