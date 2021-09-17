const fs = require('fs')
const assets = require('../assets')

var workflowDic = []

getAllWorkflows = () => {
    var count = 0
    var workflows = fs.readFileSync(assets.getSTKWorkflowsTextFile(), {encoding:'utf8', flag:'r'})
    workflows = workflows.split('\n')            
    workflows.forEach((workflow) => { 
       count++                              
       workflowDic.push({
           "key": count,
           "value": workflow
       })
    })
    return workflowDic
}

createImportedWorkflow = (workflow) => {
    
}

module.exports = {
    getAllWorkflows
}