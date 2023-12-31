const fs = require('fs');
const inquirer = require('inquirer');

// function to generate README.md from user input using template literals
function generateReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
![License Badge](https://img.shields.io/badge/license-${answers.license}-green)
${answers.license} License

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any additional questions, contact me at:
- GitHub: [${answers.username}](https://github.com/${answers.username})
- Email: ${answers.email}
`;
}

// prompt function from inquirer to get info from user
inquirer
    .prompt([
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
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contributing guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing instructions.',
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
    ]).then(answers => {
        const readmeContent = generateReadme(answers);

        // function to run the application
        async function init() {
            try {
              // Write the generated content to README.md file
              fs.writeFileSync('README.md', readmeContent);
          
              console.log('README.md file generated successfully!');
            } catch (error) {
              console.error('Error generating README.md:', error);
            }
          };
          init();
    });








