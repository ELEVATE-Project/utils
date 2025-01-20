const kafkaManager = require('./kafkaManager')
const kafkaUserManager = require('./userKafkaManager')

const dependencyManager = (dependencyMap, environmentVariables) =>{
    try{
        kafkaUserManager(dependencyMap.get('kafka'),environmentVariables)
        kafkaManager(dependencyMap.get('kafka'),environmentVariables)
    }catch(error){
        console.log(error)
        throw error
    }
}

module.exports = dependencyManager