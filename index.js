var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            name: "options",
            type: "list",
            message: "what would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role"]
        }

    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        console.log(answers.options)

        switch (answers.options) {
            case "view all departments":
                // code block
                console.log("view depts")
                viewDepartments()
                break;
            case "view all roles":
                // code block
                console.log("view roles")
                break;
            case "view all employees":
                // code block
                break;
            case "add a department":
                // code block
                console.log("add dept")
                break;
            case "add a role":
                // code block
                break;
            case "add an employee":
                // code block
                break;
            case "update an employee role":
                //code
                break;
            default:
            // code block
            console.log("error occured, wrong option")
        }

    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

    function viewDepartments (){
        //code
    }