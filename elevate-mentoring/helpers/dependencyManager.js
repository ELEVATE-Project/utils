const kafkaManager = require('./kafkaManager')

const dependencyManager = (dependencyMap, environmentVariables) =>{
    try{
        console.log("--------------- dependencyManager elevate-kafka--   ");
        kafkaManager(dependencyMap.get('kafka'),environmentVariables)
    }catch(error){
        console.log(error)
        throw error
    }
}

module.exports = dependencyManager