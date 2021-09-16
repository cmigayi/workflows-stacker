const fs = require('fs')

var workflowDic = []

getAllWorkflows = () => {
    var count = 0
    var workflows = fs.readFileSync("workflows.txt", {encoding:'utf8', flag:'r'})
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