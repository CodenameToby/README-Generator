const fs = require('fs');
const inquirer = require('inquirer');

// prompt function from inquirer to get info from user
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your Repository: ',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a decription of your project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contributing guidelines',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter testing instructions',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        },
        {
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
        },
        
    ]);
}

// function to generate README.md from user input using template literals