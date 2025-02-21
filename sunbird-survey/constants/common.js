/**
 * name : constants/common.js
 * author : Adithya Dinesh
 * Date : 23 - Aug - 2024
 * Description : All commonly used constants through out the package
 */

module.exports = {
    RESOURCE_STATUS_ACTIVE : 'active',
    RESOURCE_PROJECTION_FIELDS : ["_id" ,'type' , "name","author","createdAt","isRubricDriven"],
    RESOURCE_TYPE_OBSERVATION : 'observation',
    RESOURCE_TYPE_SURVEY : 'survey',
    RESOURCE_TYPE_KEY : 'type',
    RESOURCE_IS_RUBRIC_DRIVEN_KEY : 'isRubricDriven',
    RESOURCE_TYPE_OBSERVATION_WITH_RUBRICS : 'observation_with_rubrics',
    RESOURCE_TRANSFORM_KEYS : {
        _id : "id",
        name : 'title',
        createdAt : "created_at",
        author : "created_by"
    },
    AUTH_TOKEN_KEY : 'x-auth-token'
}