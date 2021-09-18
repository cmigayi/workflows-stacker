const fs = require('fs')
const workflowTextFile = require('./utils/workflowTextFile')
const assets = require('./assets')
const localBackup = require('./utils/stkLocalBackup')

routeWorkflow = (val) => { 
    var workflows = workflowTextFile.getAllWorkflows()   
    switch(val){
        case "all":
            console.log("---------------------------------")
            console.log("Import workflow (All workflows):")
            console.log("---------------------------------")
            workflows.forEach(workflow => {
                console.log(workflow['key']+" "+workflow['value'])                
            });
        break;
        case "a":
            console.log("---------------------------------")
            console.log("Import workflow (All workflows):")
            console.log("---------------------------------")
            workflows.forEach(workflow => {
                console.log(workflow['key']+" "+workflow['value'])                
            });
        break;
        default:
            console.log(syntaxError)
        break;
    }
}

routeAddWorkflow = (val) => {
    if(fs.existsSync(assets.getSTKWorkflowsDir()+""+val+".xaml")){
        console.log(val+" already exists");
    }else{
		console.log(assets.getProjectWorkflowsDir())
		console.log(assets.getProjectWorkflowsTestsDir())
        if(fs.existsSync(assets.getProjectWorkflowsDir()+"/"+val+".xaml") && fs.existsSync(assets.getProjectWorkflowsTestsDir()+"/Test"+val+".xaml")){
            // Copy workflow content 
            fs.copyFileSync(assets.getProjectWorkflowsDir()+"/"+val+".xaml", assets.getSTKWorkflowsDir()+"/"+val+".xaml");
            console.log(val+" copied to workflows directory");
            localBackup.updateWorkflowsBackupInDir(val+".xaml")

            fs.copyFileSync(assets.getProjectWorkflowsTestsDir()+"/Test"+val+".xaml", assets.getSTKWorkflowsTestsDir()+"/Test"+val+".xaml");
            console.log("Test"+val+" copied to workflows_tests directory");
            localBackup.updateWorkflowsTestsBackupInDir(val+".xaml")
            
            if(fs.existsSync(assets.getSTKWorkflowsTextFile())){
                // Write to file
                fs.appendFileSync(assets.getSTKWorkflowsTextFile(), val+"\n");            
            }else{
                // Create and write to file
                fs.writeFileSync(assets.getSTKWorkflowsTextFile(), val, { flag: 'wx' });
            }
            console.log(val+" appended to workflows.txt");
            localBackup.updateWorkflowsTextFile(val)
        }else{
            console.log(val+" doesn't exist in your project or it's missing a test file");
        }
    }
}

routeImportWorkflow = (val) => {
    var workflows = workflowTextFile.getAllWorkflows() 
    workflows.forEach(workflow => {
        if(workflow['key'].toString() === val){
            console.log(workflow['value'])
            if(fs.existsSync(assets.getSTKWorkflowsDir()+"/"+workflow['value']+".xaml") && fs.existsSync(assets.getSTKWorkflowsTestsDir()+"/Test"+workflow['value']+".xaml")){
                // Copy workflow content 
                fs.copyFileSync(assets.getSTKWorkflowsDir()+"/"+workflow['value']+".xaml", assets.getProjectWorkflowsDir()+"/"+workflow['value']+".xaml");
                console.log(workflow['value']+" imported to project workflows directory");
    
                fs.copyFileSync(assets.getSTKWorkflowsTestsDir()+"/Test"+workflow['value']+".xaml", assets.getProjectWorkflowsTestsDir()+"/Test"+workflow['value']+".xaml");
                console.log("Test"+workflow['value']+" copied to workflows_tests directory");

                console.log(workflow['value']+" imported to project tests directory");
            }else{
                console.log(workflow['value']+" doesn't exist in your stk workflow repository");
            }
        }
    })    
}

routeBackupWorkflow = () => {
    localBackup.createAppDirIfNotExist()
    localBackup.createAndCopyAllWorkflowsBackupInDirIfNotExist()
    localBackup.createAndCopyAllWorkflowsTestsBackupInDirIfNotExist()
    localBackup.createWorkflowsTextFileIfNotExist()
}

routeDeleteWorkflow = (val) => {

}

routeUpdateWorkflow = (val) => {

}

module.exports = {
    routeWorkflow,
    routeAddWorkflow,
    routeImportWorkflow,
    routeBackupWorkflow
}
