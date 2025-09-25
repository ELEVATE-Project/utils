module.exports = {
    routes: [
    {
        sourceRoute: "/project/v1/userProjects/sync",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/sync",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/sync/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/sync/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/addStory/:id",
        type: "PUT",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/addStory/:id",
        type: "PUT"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/addStory",
        type: "PUT",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/addStory",
        type: "PUT"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/details",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/details",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/details/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/details/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/verifyCertificate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/verifyCertificate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/certificateCallback",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/certificateCallback",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/certificateCallbackError",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/certificateCallbackError",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/verifyCertificate/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/verifyCertificate/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/certificateReIssue",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/certificateReIssue",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/certificateReIssue/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/certificateReIssue/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/certificateBaseTemplates/createOrUpdate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/certificateBaseTemplates/createOrUpdate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/certificateBaseTemplates/createOrUpdate/:id",
        type: "PATCH",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/certificateBaseTemplates/createOrUpdate/:id",
        type: "PATCH"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/certificateTemplates/createOrUpdate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/certificateTemplates/createOrUpdate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/certificateTemplates/createOrUpdate/:id",
        type: "PATCH",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/certificateTemplates/createOrUpdate/:id",
        type: "PATCH"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/certificateTemplates/uploadTemplate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/certificateTemplates/uploadTemplate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/certificateTemplates/uploadTemplate/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/certificateTemplates/uploadTemplate/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/certificateTemplates/createSvg",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/certificateTemplates/createSvg",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/certificates",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/certificates",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/configurations/read",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/configurations/read",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/tasksStatus",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/tasksStatus",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/tasksStatus/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/tasksStatus/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/add",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/add",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/userAssigned",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/userAssigned",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/share",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/share",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/share/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/share/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/importedProjects",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/importedProjects",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/importedProjects/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/importedProjects/:id",
        type: "GET"
        },
        service: "project"
    },
    
    {
        sourceRoute: '/project/v1/profile/read',
        type: 'GET',
        inSequence: false,
        orchestrated: true,
        targetRoute: {
            path: '/user/v1/profile',
            type: 'GET',
            functionName: "profileRead"
        },
        service: "user"
    },
    {
        sourceRoute: "/interface/v1/userProjects/list",
        type: "POST",
        inSequence: true,
        orchestrated: true,
        targetRoute: {
        path: "/project/v1/userProjects/list",
        type: "POST",
        functionName: "projectsList"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/cloud-services/files/download",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/cloud-services/files/download",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/cloud-services/files/preSignedUrls",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/cloud-services/files/preSignedUrls",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/cloud-services/files/getDownloadableUrl",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/cloud-services/files/getDownloadableUrl",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/dataPipeline/userProject",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/dataPipeline/userProject",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/dataPipeline/userProject/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/dataPipeline/userProject/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/bulkCreate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/bulkCreate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/bulkUpdate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/bulkUpdate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/importProjectTemplate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/importProjectTemplate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/importProjectTemplate/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/importProjectTemplate/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/listByIds",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/listByIds",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/details",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/details",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/details/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/details/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/update/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/update/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templates/list",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templates/list",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templateTasks/bulkCreate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templateTasks/bulkCreate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templateTasks/bulkCreate/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templateTasks/bulkCreate/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templateTasks/bulkUpdate",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templateTasks/bulkUpdate",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templateTasks/bulkUpdate/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templateTasks/bulkUpdate/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templateTasks/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templateTasks/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/project/templateTasks/update/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/project/templateTasks/update/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/library/categories/projects",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/library/categories/projects",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/library/categories/projects/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/library/categories/projects/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/library/categories/create",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/library/categories/create",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/library/categories/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/library/categories/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/library/categories/update/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/library/categories/update/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/library/categories/list",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/library/categories/list",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/update/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/update/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/details",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/details",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/details/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/details/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/addRolesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/addRolesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/addRolesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/addRolesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/removeRolesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/removeRolesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/removeRolesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/removeRolesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/addEntitiesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/addEntitiesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/addEntitiesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/addEntitiesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/removeEntitiesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/removeEntitiesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/removeEntitiesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/removeEntitiesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/list",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/list",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/join",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/join",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/join/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/join/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/programs/create",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/programs/create",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/create",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/create",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/update/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/update/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/list",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/list",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/forUserRoleAndLocation",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/forUserRoleAndLocation",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/detailsBasedOnRoleAndLocation",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/detailsBasedOnRoleAndLocation",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/detailsBasedOnRoleAndLocation/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/detailsBasedOnRoleAndLocation/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/addRolesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/addRolesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/addRolesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/addRolesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/addEntitiesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/addEntitiesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/addEntitiesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/addEntitiesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/removeRolesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/removeRolesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/removeRolesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/removeRolesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/targetedSolutions",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/targetedSolutions",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/fetchLink",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/fetchLink",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/fetchLink/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/fetchLink/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/verifyLink",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/verifyLink",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/verifyLink/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/verifyLink/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/verifySolution/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/verifySolution/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/getDetails",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/getDetails",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/getDetails/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/getDetails/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/removeEntitiesInScope",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/removeEntitiesInScope",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/removeEntitiesInScope/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/removeEntitiesInScope/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/importFromLibrary",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/importFromLibrary",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/importFromLibrary/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/importFromLibrary/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/userProjects/update/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/userProjects/update/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/forms/create",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/forms/create",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/forms/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/forms/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/forms/update/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/forms/update/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/forms/read",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/forms/read",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/forms/read/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/forms/read/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/admin/dbFind",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/admin/dbFind",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/admin/dbFind/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/admin/dbFind/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/reports/getProgramsByEntity/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/reports/getProgramsByEntity/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/reports/getProgramsByEntity",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/reports/getProgramsByEntity",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/reports/entity/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/reports/entity/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/reports/entity",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/reports/entity",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/reports/detailView",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/reports/detailView",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/reports/detailView/:id",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/reports/detailView/:id",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/admin/createIndex",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/admin/createIndex",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/admin/createIndex/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/admin/createIndex/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/details",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/details",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/solutions/details/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/solutions/details/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/users/solutions",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/users/solutions",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/users/solutions/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/users/solutions/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/users/programs",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/users/programs",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/projectAttributes/create",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/projectAttributes/create",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/projectAttributes/update",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/projectAttributes/update",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/projectAttributes/find",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/projectAttributes/find",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/wishlist/add/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/wishlist/add/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/wishlist/add",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/wishlist/add",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/wishlist/remove/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/wishlist/remove/:id",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/wishlist/remove",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/wishlist/remove",
        type: "POST"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/wishlist/list",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/wishlist/list",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/template/list",
        type: "GET",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/template/list",
        type: "GET"
        },
        service: "project"
    },
    {
        sourceRoute: "/project/v1/scp/publishTemplateAndTasks",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
        path: "/project/v1/scp/publishTemplateAndTasks",
        type: "POST"
        },
        service: "project"
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
        sourceRoute: '/user/v1/user/read',
        type: 'GET',
        inSequence: false,
        orchestrated: true,
        targetRoute: {
            path: '/user/v1/profile',
            type: 'GET',
            functionName: "profileRead"
        },
        service: "user"
    },
    {
        sourceRoute: '/user/v1/user/read/:id',
        type: 'GET',
        inSequence: false,
        orchestrated: true,
        targetRoute: {
            path: '/user/v1/profile',
            type: 'GET',
            functionName: "profileRead"
        },
        service: "user"
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
        service: "entity",
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
        service: "entity",
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
        sourceRoute: "/entity-management/v1/admin/createIndex",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
            path: "/entity-management/v1/admin/createIndex",
            type: "POST"
        },
        service: "entity"
    },
    {
        sourceRoute: "/entity-management/v1/admin/createIndex/:id",
        type: "POST",
        inSequence: false,
        orchestrated: false,
        targetRoute: {
            path: "/entity-management/v1/admin/createIndex/:id",
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
        sourceRoute: '/user/v1/organization/read',
        type: 'GET',
        inSequence: false,
        orchestrated: false,
        targetRoute: {
            path: '/user/v1/tenant/read',
            type: 'POST',
            functionName: 'readOrganization',
        },
        service: "user",
    },
    ]
}