const generateMarkdown = data => {
  return `# ${data.title}

  ## Description 
  ${data.discription}
 
  ## License:
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]
  
 
  ## Table of Contents
  <p display = "block" >
  _ [Installation](#installation)
   _ [Usage](#usage)
   _ [License](#license)
   _ [Contribute](#contribute)
   _ [Tests](#tests)
   *_[Questions](#questions) </p>
  
  
  ## Installation 
  ${data.installation}
 
  ## Usage 
  ${data.usage}
## License
${data.license}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
${data.email}


  `;
}


// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   return  `# ${data.license}`;
 
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// function renderTitle(title){
//   return  `# ${data.title}`;
// }
// // data.title
// // data.description 
// // data.author 

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = generateMarkdown;
