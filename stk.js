const utils = require('./utils')
const args = process.argv
const syntaxError = "Invalid request. Kindly refer to the documentation for a valid syntax"

try{
    if(args.length < 4){
        if(args[2] === "backup"){           
            utils.routeBackupWorkflow()
        }else{
            console.log(syntaxError)
        }
    }
    if(args.length === 4){
        // Check the preceeding args validity
        if(args[2] === "wf"){         
            utils.routeWorkflow(args[3])
        }else if(args[2] === "add"){         
            utils.routeAddWorkflow(args[3])
        }else if(args[2] === "import"){           
            utils.routeImportWorkflow(args[3])
        }else{
            console.log(syntaxError)
        }
    }
    if(args.length === 5){
        console.log(args[3])
    }
}catch(err){
    console.log(err)
}