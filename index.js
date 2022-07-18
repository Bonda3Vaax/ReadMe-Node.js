// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');
const generate = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        name: "title",
        message: "Please provide your project description:?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide the project usage information:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing guidlines and parties:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the test instructions:"
    },
    {
        type: "checkbox",
        name: "licence",
        message: "Please provide the project licence and badge:"
        choices: [
        "MIT License",
        "Apache 2.0 License",
        "The Unlicense",
        "Boost Software License 1.0",
        "The Perl License",
        "The Artistic License 2.0",
        "Mozilla Public License 2.0",
        "ISC License (ISC)",
        "Eclipse Public License 1.0",
    ],
    }, 

    {
        type: "input",
        name: "username",
        message: "Please provide your github user name:"
    },
    {
        type: "input",
        name: "repo",
        message: "Please provide your e-mail:	
    },];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log(`Your ${data.title} README.md file has been created.`)
    );
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating ReadMe...✔️');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
};

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})
