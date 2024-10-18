const kafkaManager = require('./kafkaManager')

const dependencyManager = (dependencyMap, environmentVariables) =>{
    try{
        kafkaManager(dependencyMap.get('kafka'),environmentVariables)
    }catch(error){
        console.log(error)
        throw error
    }
}

module.exports = dependencyManager