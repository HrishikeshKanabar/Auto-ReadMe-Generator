// Included packages needed for this application

const inq = require("inquirer");
const fileSys = require("fs");
const genMarkdown = require("./utils/generateMarkdown.js");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What should be title for your project ?(Required)",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        return 'Title is required to generate "ReadME" file';
      }
    },
  },
  {
    type: "input",
    name: "desc",
    message: "What should be description for your project ?",
  },
  {
    type: "input",
    name: "install",
    message: "Please enter intallation instruction for your project :",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage information about project :",
  },
  {
    type: "input",
    name: "contri",
    message: "Please add guidelines for contributing in your project :",
  },
  {
    type: "input",
    name: "test",
    message: "which test are perfomred for this project ?",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: [
      "GPLv3",
      "GPLv2",
      "MIT",
      "APACHE 2.0",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "IPL",
      "None",
    ],
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your Github username :",
    validate: (username) => {
      if (username) {
        return true;
      } else {
        return 'Username is required to generate "ReadME" file';
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your Github email :",
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fileSys.writeFile(fileName, data, (err) => {
    if (err) {
      return err;
    }
    console.log("Your 'README' has generated sucessfully !");
  });
}

//Function to initialize app
function init() {
  inq.prompt(questions).then((data) => {
    const dataForReadme = genMarkdown(data);
    //console.log(dataForReadme);
    writeToFile("./generatedReadme/genratedReadMe.md", dataForReadme);
  });
}

// Function call to initialize app
init();
