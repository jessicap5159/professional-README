// create title section 
const generateTitle = titleText => {
    if (!titleText) {
        return '';
    }
    return `
        #${titleText}
    `
}
// create description section
const generateDesc = descText => {
    if (!descText) {
        return '';
    }
    return `
        ## Description
        ${descText}
    `
}
// create table of contents
const generateContents = contentsText => {
    if (!contentsText) {
        return '';
    }
    return `
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Test](#test)
    * [Questions](#Questions)
    
    `
}
// create installation section
const generateInstallInstructs = installText => {
    if (!installText) {
        return '';
    }
    return `
        ## Installation
        ${installText}
    `
}
// create usage section
const generateUsage = usageText => {
    if (!usageText) {
        return '';
    }
    return `
        ## Usage
        ${usageText}
    `
}
// license section is in generateMarkdown.js

// create contributions section
const generateContributions = contributionsText => {
    if (!contributionsText) {
        return '';
    }
    return `
        ## Contributing
        ${contributionsText}
    `
}
// create tests section
const generateTestsSection = testsSectionText => {
    if (!testsSectionText) {
        return '';
    }
    return `
        ## Tests
        ${testsSectionText}
    `
}
// create questions section
    const generateQuestionsSection = questionsSectionText => {
        if (!testsSquestionsSectionTextctionText) {
            return '';
        }
        return `
            ## Questions
            GitHub username: 
            Please contact me with any questions at: 
        `
    }