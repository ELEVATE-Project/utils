/**
 * name : constants/common.js
 * author : Adithya Dinesh
 * Date : 23 - Aug - 2024
 * Description : All commonly used constants through out the package
 */

module.exports = {
    PROJECT_STATUS_PUBLISHED : 'published',
    PROJECT_PROJECTION_FIELDS : ["_id" , "title","createdBy","createdAt","description"],
    RESOURCE_TYPE_PTOJECT : 'projects',
    PROJECT_TRANSFORM_KEYS : {
        _id : "id",
        createdAt : "created_at",
        createdBy : "created_by"
    },
    AUTH_TOKEN_KEY : 'x-auth-token'

}