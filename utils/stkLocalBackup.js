/**
 * Persistent local data storage: Copying data to AppData location 
 */

const fs = require('fs')
const assets = require('../assets')

const bakWorkflowsTextFile = assets.getSTKLocalDataBakDir()+"/.bak_workflows.txt"
const stkWorkflowsTextFile = assets.stkWorkflowsTextFile
const stkWorkflowsDir = assets.stkWorkflowsDir
const stkWorkflowsTestsDir = assets.getSTKWorkflowsTestsDir

createAppDirIfNotExist = () => {
    if(!fs.existsSync(assets.getSTKLocalDataBakDir())){
        fs.mkdirSync(assets.getSTKLocalDataBakDir())
    }
}

createAndCopyAllWorkflowsBackupInDirIfNotExist = () => {
    if(!fs.existsSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflows")){
        fs.mkdirSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflows")
    }
    fs.copyFileSync(stkWorkflowsDir+"/*", assets.getSTKLocalDataBakDir()+"/.bakWorkflows")
}

updateWorkflowsBackupInDir = (workflow) => {
    fs.copyFileSync(assets.getProjectWorkflowsDir()+"/"+val+".xaml", assets.getSTKLocalDataBakDir()+"/.bakWorkflows"+"/"+workflow);
    console.log(workflow+" copied to local backup directory");
}

createAndCopyAllWorkflowsTestsBackupInDirIfNotExist = () => {
    if(!fs.existsSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests")){
        fs.mkdirSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests")
    }
    fs.copyFileSync(stkWorkflowsTestsDir+"/*", assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests")
}

updateWorkflowsTestsBackupInDir = (workflowTest) => {
    fs.copyFileSync(assets.getProjectWorkflowsTestsDir()+"/Test"+val+".xaml", assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests"+"/Test"+workflowTest);
    console.log(workflowTest+" copied to workflows_tests directory");    
}

createWorkflowsTextFileIfNotExist = () => {
    if(!fs.existsSync(bakWorkflowsTextFile)){
        // Create file
        fs.writeFileSync(bakWorkflowsTextFile, "", { flag: 'wx' });
    }
    fs.copyFileSync(stkWorkflowsTextFile, bakWorkflowsTextFile)
}

updateWorkflowsTextFile = (workflowName) => {
    if(fs.existsSync(bakWorkflowsTextFile)){
        // Write to file
        fs.appendFileSync(bakWorkflowsTextFile, workflowName+"\n");            
    }else{
        // Create and write to file
        fs.writeFileSync(bakWorkflowsTextFile, workflowName, { flag: 'wx' });
    }
}

module.exports = {
    createAppDirIfNotExist,
    createAndCopyWorkflowsBackupInDirIfNotExist,
    createAndCopyWorkflowsTestsBackupInDirIfNotExist,
    createWorkflowsTextFileIfNotExist,
    updateWorkflowsTextFile,
    updateWorkflowsBackupInDir,
    updateWorkflowsTestsBackupInDir 
}