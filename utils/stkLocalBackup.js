/**
 * Persistent local data storage: Copying data to AppData location 
 */

const fs = require('fs')
const assets = require('../assets')
const fsExtra = require('fs-extra')

const bakWorkflowsTextFile = assets.getSTKLocalDataBakDir()+"/.bak_workflows.txt"
const stkWorkflowsTextFile = assets.getSTKWorkflowsTextFile()
const stkWorkflowsDir = assets.getSTKWorkflowsDir()
const stkWorkflowsTestsDir = assets.getSTKWorkflowsTestsDir()

createAppDirIfNotExist = () => {
    if(!fs.existsSync(assets.getSTKLocalDataBakDir())){
        fs.mkdirSync(assets.getSTKLocalDataBakDir())
    }
}

createAndCopyAllWorkflowsBackupInDirIfNotExist = () => {
    if(!fs.existsSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflows")){
        fs.mkdirSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflows")
    }
    //fs.copyFileSync(stkWorkflowsDir+"/*", assets.getSTKLocalDataBakDir()+"/.bakWorkflows")
    fsExtra.copy(stkWorkflowsDir, assets.getSTKLocalDataBakDir()+"/.bakWorkflows").then(() => console.log("Copied workflows to local backup")).catch((err) => console.log(err));
}

updateWorkflowsBackupInDir = (workflow) => {
    fs.copyFileSync(assets.getProjectWorkflowsDir()+"/"+workflow, assets.getSTKLocalDataBakDir()+"/.bakWorkflows"+"/"+workflow);
    console.log(workflow+" copied to local backup directory");
}

createAndCopyAllWorkflowsTestsBackupInDirIfNotExist = () => {
    if(!fs.existsSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests")){
        fs.mkdirSync(assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests")
    }
    //fs.copyFileSync(stkWorkflowsTestsDir+"/*", assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests")
    fsExtra.copy(stkWorkflowsTestsDir, assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests").then(() => console.log("Copied workflowsTests to local backup")).catch((err) => console.log(err));
}

updateWorkflowsTestsBackupInDir = (workflowTest) => {
    fs.copyFileSync(assets.getProjectWorkflowsTestsDir()+"/Test"+workflowTest, assets.getSTKLocalDataBakDir()+"/.bakWorkflowsTests"+"/Test"+workflowTest);
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
    createAndCopyAllWorkflowsBackupInDirIfNotExist,
    createAndCopyAllWorkflowsTestsBackupInDirIfNotExist,
    createWorkflowsTextFileIfNotExist,
    updateWorkflowsTextFile,
    updateWorkflowsBackupInDir,
    updateWorkflowsTestsBackupInDir 
}