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
const projectWorkflowsDir = path.resolve('../'+project+'/Custom_Workflows') 
const projectWorkflowsTestsDir = path.resolve('../'+project+'/Tests')

/**
* stk support files  !!!IMPORTANT
*/
var logFile = path.resolve('../'+project+'/stk_log.txt')
var localDataBakDirWin = path.resolve('../../../AppData/Local/workflows-stacker')
var localDataBakDirMac = "" // Use this:  path.resolve(YOUR LOCATION)  
var localDataBakDirLin = "" // Use this:  path.resolve(YOUR LOCATION) 
var globalDataBakDir = ""
var fileExt = ".xaml"

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

getSTKLocalDataBakDir = () => {
    let opsys = process.platform;
    console.log(opsys)
    if(opsys === "linux"){        
        return localDataBakDirLin
    }
    if(opsys == "darwin"){ 
        return localDataBakDirMac
    }
    if (opsys == "win32" || opsys == "win64") {
        return localDataBakDirWin
    }
}

module.exports = {
    getProjectWorkflowsDir,
	getProjectWorkflowsTestsDir,
	getSTKWorkflowsDir,
	getSTKWorkflowsTestsDir,
	getSTKWorkflowsTextFile,
    getSTKLocalDataBakDir
}
