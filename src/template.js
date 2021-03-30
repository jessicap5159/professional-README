// Make into one function

module.exports = generatePage;

function generatePage(userAnswers) {
    return `
## ${userAnswers.title}  

# Description 
${userAnswers.description}  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#Questions)
  

# Installation
${userAnswers.installation}  


# Usage
${userAnswers.usage}  


# License
![badge](https://img.shields.io/badge/license-${userAnswers.license}-blue.svg)
Project covered under ${userAnswers.license} license: (choosealicense.com/licenses/${userAnswers.license})


# Contributing
${userAnswers.contribution}  

# Tests
${userAnswers.instructions}  

# Questions  

GitHub: github.com/${userAnswers.username} 

Please email me with additional questions: ${userAnswers.emailaddress}

`
}

    //  ![badge] (link from shields.io ${userAnswers.license})
    // Project covered under ${userAnswers.license} choosealicense.cometc/${userAnswers.license}