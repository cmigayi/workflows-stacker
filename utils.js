const fs = require('fs')
const workflowTextFile = require('./utils/workflowTextFile')
const assets = require('./assets')

routeWorkflow = async (val) => { 
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
    if(fs.existsSync(assets.getProjectWorkflowsDir()+""+val+".xaml")){
        console.log(val+" already exists");
    }else{
        if(fs.existsSync(val+".xaml") && fs.existsSync("Test"+val+".xaml")){
            // Copy workflow content 
            fs.copyFileSync(val+".xaml", assets.getProjectWorkflowsDir()+""+val+".xaml");
            console.log(val+" copied to workflows directory");

            fs.copyFileSync("Test"+val+".xaml", "workflows_tests/Test"+val+".xaml");
            console.log("Test"+val+" copied to workflows_tests directory");
            
            if(fs.existsSync("workflows.txt")){
                // Write to file
                fs.appendFileSync("workflows.txt", val+"\n");            
            }else{
                // Create and write to file
                fs.writeFileSync("workflows.txt", val, { flag: 'wx' });
            }
            console.log(val+" appended to workflows.txt");
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
            if(fs.existsSync(workflow['value']+".xaml") && fs.existsSync("Test"+workflow['value']+".xaml")){
                // Copy workflow content 
                fs.copyFileSync(assets.getProjectWorkflowsDir()+""+workflow['value']+".xaml", "workflows_imports/"+workflow['value']+".xaml");
                console.log(val+" copied to workflows directory");
    
                fs.copyFileSync("workflows_tests/Test"+workflow['value']+".xaml", "workflows_tests_imports/"+"Test"+workflow['value']+".xaml");
                console.log("Test"+workflow['value']+" copied to workflows_tests directory");

                console.log(workflow['value']+" imported to project");
            }else{
                console.log(val+" doesn't exist in your project or it's missing a test file");
            }
        }
    })    
}

routeDeleteWorkflow = (val) => {

}

routeUpdateWorkflow = (val) => {

}

module.exports = {
    routeWorkflow,
    routeAddWorkflow,
    routeImportWorkflow
}