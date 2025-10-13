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
            sourceRoute: "/project/v1/userProjects/solutionDetails/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userProjects/solutionDetails/:id",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/userProjects/solutionDetails",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userProjects/solutionDetails",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/userProjects/pushSubmissionToTask/:id",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userProjects/pushSubmissionToTask/:id",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/userProjects/pushSubmissionToTask",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userProjects/pushSubmissionToTask",
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
            sourceRoute: "/project/v1/profile/read",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/profile/read",
                type: "GET"
            },
            service: "project"
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
            service : "project"
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
            sourceRoute: "/project/v1/dataPipeline/pushProjectDetailsToKafka",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/dataPipeline/pushProjectDetailsToKafka",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/dataPipeline/pushProjectDetailsToKafka/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/dataPipeline/pushProjectDetailsToKafka/:id",
                type: "POST"
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
            sourceRoute: "/project/v1/programs/read",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/programs/read",
                type: "GET"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/programs/read/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/programs/read/:id",
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
            sourceRoute: "/project/v1/solutions/fetchLinkInternal",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/solutions/fetchLinkInternal",
                type: "GET"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/solutions/fetchLinkInternal/:id",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/solutions/fetchLinkInternal/:id",
                type: "GET"
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
            sourceRoute: "/project/v1/userCourses/delete",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userCourses/delete",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/userCourses/createOrUpdate",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userCourses/createOrUpdate",
                type: "POST"
            },
            service: "project"
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
                type: "GET",
                functionName: "readUserTitle"

            },
            service: "entity"
        },
        {
            sourceRoute: "/entity-management/v1/entities/targetedRoles",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/entity-management/v1/entities/targetedRoles",
                type: "GET",
                functionName: "readUserTitle"

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
            sourceRoute: "/user/v1/org-admin/createUsers",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/user/v1/org-admin/createUsers",
                type: "POST"
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
            sourceRoute: "/project/v1/userProjects/deleteUserPIIData",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userProjects/deleteUserPIIData",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/userExtension/bulkUpload",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userExtension/bulkUpload",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: '/interface/v1/users/solutions',
            type: 'POST',
            inSequence: true,
            orchestrated: true,
            targetRoute: {
                type: 'POST',
                functionName: 'getMergedProgramSolutions',
                paths: [
                    {
                        path: '/project/v1/users/solutions/:id',
                        type: 'POST',
                    },
                    { service: 'survey', path: '/survey/v1/users/solutions/:id', type: 'POST' },
                ],
            },
            service: 'project',
        },
        {
            sourceRoute: '/interface/v1/users/solutions/:id',
            type: 'POST',
            inSequence: true,
            orchestrated: true,
            targetRoute: {
                type: 'POST',
                functionName: 'getMergedProgramSolutions',
                paths: [
                    {
                        path: '/project/v1/users/solutions/:id',
                        type: 'POST',
                    },
                    { service: 'survey', path: '/survey/v1/users/solutions/:id', type: 'POST' },
                ],
            },
            service: 'project',
        },
        {
            sourceRoute: "/project/health",
            type: "GET",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/health",
                type: "GET"
            },
            service: "project"
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
			sourceRoute: "/project/v1/userProjects/searchEntities",
			type: "GET",
			priority: "MUST_HAVE",
			inSequence: false,
			orchestrated: false,
			targetRoute: {
                path: "/project/v1/userProjects/searchEntities",
                type: "POST"
            },
			service: "project"
		},
        {
			sourceRoute: "/entity-management/v1/admin/deleteEntity",
			type: "POST",
			inSequence: false,
			targetRoute: {
				path: "/entity-management/v1/admin/deleteEntity",
				type: "POST"
			},
            service: "entity"
		},
        {
			sourceRoute: "/entity-management/v1/admin/deleteEntity/:id",
			type: "POST",
			inSequence: false,
			targetRoute: {
				path: "/entity-management/v1/admin/deleteEntity/:id",
				type: "POST"
			},
            service: "entity"
		},
        {
            sourceRoute: "/project/v1/admin/deleteResource",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/project/v1/admin/deleteResource",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/admin/deleteResource/:id",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/project/v1/admin/deleteResource/:id",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/programs/removeSolutions",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/project/v1/programs/removeSolutions",
                type: "POST"
            },
            service: "project"
        },
        {
            sourceRoute: "/project/v1/programs/removeSolutions/:id",
            type: "POST",
            inSequence: false,
            targetRoute: {
                path: "/project/v1/programs/removeSolutions/:id",
                type: "POST"
            },
            service: "project"
        },
        {
			sourceRoute: "/project/v1/userProjects/addEntity",
			type: "POST",
			inSequence: false,
			targetRoute: {
				path: "/project/v1/userProjects/addEntity",
				type: "POST"
			},
            service: "project"
		},
        {
			sourceRoute: "/project/v1/userProjects/addEntity/:id",
			type: "POST",
			inSequence: false,
			targetRoute: {
				path: "/project/v1/userProjects/addEntity/:id",
				type: "POST"
			},
            service: "project"
		},
        {
            sourceRoute: "/project/v1/organizationExtension/createOrUpdate",
            type: "POST",
            inSequence: false,
            targetRoute: {
				path: "/project/v1/organizationExtension/createOrUpdate",
				type: "POST"
			},
            service: "project"
        },
        {
            sourceRoute: "/project/v1/organizationExtension/createOrUpdate/:id",
            type: "POST",
            inSequence: false,
            targetRoute: {
				path: "/project/v1/organizationExtension/createOrUpdate/:id",
				type: "POST"
			},
            service: "project"
        },
        {
            sourceRoute: "/project/v1/organizationExtension/createOrUpdate",
            type: "PATCH",
            inSequence: false,
            targetRoute: {
				path: "/project/v1/organizationExtension/createOrUpdate",
				type: "POST"
			},
            service: "project"
        },
        {
            sourceRoute: "/project/v1/organizationExtension/createOrUpdate/:id",
            type: "PATCH",
            inSequence: false,
            targetRoute: {
				path: "/project/v1/organizationExtension/createOrUpdate/:id",
				type: "POST"
			},
            service: "project"
        },
        {
            sourceRoute: "/project/v1/organizationExtension/updateRelatedOrgs",
            type: "POST",
            inSequence: false,
            targetRoute: {
				path: "/project/v1/organizationExtension/updateRelatedOrgs",
				type: "POST"
			},
            service: "project"
        },
        {
            sourceRoute: "/project/v1/userExtension/update",
            type: "POST",
            inSequence: false,
            orchestrated: false,
            targetRoute: {
                path: "/project/v1/userExtension/update",
                type: "POST"
            },
            service: "project"
        }
    ]
}