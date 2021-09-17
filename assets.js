const path = require('path');

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
* Accessing stk files from the workflow-stacker.
*/
const stkWorkflowsDir = path.resolve('../'+project+'/node_modules/workflows-stacker/workflows')
const stkWorkflowsTestsDir = path.resolve('../'+project+'/node_modules/workflows-stacker/workflows_tests')
const stkWorkflowsTextFile = path.resolve('../'+project+'/node_modules/workflows-stacker/workflows.txt')

/**
* Accessing project files from root
*/
var projectWorkflowsDir = path.resolve('../'+project+'/Custom_Workflows') 
const projectWorkflowsTestsDir = path.resolve('../'+project+'/Tests')

getProjectWorkflowsDir = () => {
    return projectWorkflowsDir 
}

getProjectWorkflowsTestsDir = () => {
    return projectWorkflowsTestsDir 
}

getSTKWorkflowsDir = () => {
    return stkWorkflowsDir 
}

getSTKWorkflowsTestsDir = () => {
    return stkWorkflowsTestsDir 
}

getSTKWorkflowsTextFile = () => {
    return stkWorkflowsTextFile 
}

module.exports = {
    getProjectWorkflowsDir,
	getProjectWorkflowsTestsDir,
	getSTKWorkflowsDir,
	getSTKWorkflowsTestsDir,
	getSTKWorkflowsTextFile
}
