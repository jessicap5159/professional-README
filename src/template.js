// Module needed to export file

module.exports = generatePage;


// Function to generate page and template for page

function generatePage(userAnswers) {
    return `
# ${userAnswers.title}  
![badge](https://img.shields.io/badge/license-${userAnswers.license}-blue.svg)

## Description
${userAnswers.description}  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#Questions)
  

## Installation
${userAnswers.installation}  


## Usage
${userAnswers.usage}  


## License

Project covered under ${userAnswers.license} license: choosealicense.com/licenses/${userAnswers.license}

## Contributing
${userAnswers.contribution}  

## Tests
${userAnswers.instructions}  

## Questions  

GitHub: github.com/${userAnswers.username} 

Please email me with additional questions: ${userAnswers.emailaddress}

`
}

