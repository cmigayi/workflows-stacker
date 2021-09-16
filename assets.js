/**
* The package we are accessing here is not for changelog-gitter but for
* the project using changelog-gitter
*/
const pjson = require('../../project.json');

/**
* The project name we are accessing here is not for changelog-gitter but for
* the project using changelog-gitter
*/
var project = pjson.name;

/**
* Accessing stk files from the stk.
*/
const stkWorkflowFiles = path.resolve('../'+project+'/node_modules/workflows-stacker/workflows')
const stkWorkflowTestFiles = path.resolve('../'+project+'/node_modules/workflows-stacker/workflows_tests')

/**
* Accessing project files from root
*/
var projectWorkflowsDir = "./workflows/" 
const projectWorkflowTestFiles = "./Tests/"

getProjectWorkflowsDir = () => {
    return projectWorkflowsDir 
}

getWorkflowsDir = () => {
    return projectWorkflowsDir 
}

module.exports = {
    getProjectWorkflowsDir,
}