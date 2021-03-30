// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require ('./src/template.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description for your project',
            validate: projectDescInput => {
                if (projectDescInput) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide the installation instructions for your project',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide the usage information for your project',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter the usage information for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide the contribution guidelines for your project',
            validate: contribInput => {
                if (contribInput) {
                    return true;
                } else {
                    console.log('Please provide the contribution guidelines for your project!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'instructions',
            message: 'Provide the test instructions for your project',
            validate: testInsInput => {
                if (testInsInput) {
                    return true;
                } else {
                    console.log('Please provide the test instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Provide the type of license for your project',
            choices: ['MIT', 'Apache 2.0', 'GPL', '2-Clause BSD', '3-Clause BSD', 'GNU General Public License', 'GNU Lesser General Public License', 'Mozilla Public License 2.0', 'Common Development and Distribution License 1.0', 'Eclipse Public License 2.0'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                
                } else {
                    console.log('Please provide a license for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please provide your GitHub username!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'emailaddress',
            message: 'Please enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please provide your email address!');
                    return false;
                }
            }
        },

    ]);
};
// questions().then(answers => console.log(answers));



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

questions().then(projectData => {
    generateReadMe = generatePage(projectData);
    fs.writeFile('./README.md', generateReadMe, err => {
        if (err) throw new Error(err);
        console.log('README successfully generated!');
    });
});