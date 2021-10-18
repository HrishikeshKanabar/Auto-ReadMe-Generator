// Included packages needed for this application

var inq = require('inquirer')


// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What should be title for your project ?",

    },
    {
        type:"input",
        name:"desc",
        message:"What should be description for your project ?",

    },   
    {
        type:"input",
        name:"install",
        message:"Please enter intallation instruction for your project :",

    }, 
    {
        type:"input",
        name:"usage",
        message:"Please enter usage information about project :",

    },  
    {
        type:"input",
        name:"contri",
        message:"Please add guidelines for contributing in your project :",

    },
    {
        type:"input",
        name:"test",
        message:"which test are perfomred for this project ?",

    },
    {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 2","BSD 3","BSD 4","None"]
    }, 
    {
        type:"input",
        name:"username",
        message:"Please enter your Github username :",
        
    },
    {
        type:"input",
        name:"email",
        message:"Please enter your Github email :",
        
    },   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    inq.prompt(questions).then(data=>{
        console.log(data);
    });
}

// Function call to initialize app
init();
