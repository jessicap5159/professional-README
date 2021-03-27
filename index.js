// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// const { }
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
            name: 'test-instructions',
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
            name: 'license-list',
            message: 'Provide the type of license for your project',
            choices: ['MIT, Apache, GPL'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                    // renderLicenseBadge(license);
                } else {
                    console.log('Please provide a license for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github-username',
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
            name: 'email-address',
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
questions().then(answers => console.log(answers));



// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

// test comment