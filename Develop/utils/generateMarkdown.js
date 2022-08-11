const generateMarkdown = data => {
  return `# ${data.title}

  ## Description 
  ${data.discription}
 
  ## License:
  ![License](https://img.shields.io/badge/License-${data.license}-green.svg)
  ![Badge](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
 
  ## Table of Contents
 
  - [Installation](#installation)
   - [Usage](#usage)
   -[License](#license)
   - [Contribute](#contribute)
   - [Tests](#tests)
  - [Questions](#questions) 
  
  
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




module.exports = generateMarkdown;
