// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// to install these packages:
//      npm i inquirer@8.2.4

var mydata={}
// Create an array of questions for user input
const questionss = ["What is your Email?","What is your Github Username?",
"What is the NAME of your project?","What LICENSE will you use?",
"Write a DESCRIPTION of your project","How do you install your project?", 
"Enter USAGE INFORMATION", "Enter CONTRIBUTION GUIDELINES", "Enter TEST INSTRUCTIONS"];
var licenseopts =["Apache 2.0","Boost Software 1.0","BSD 3-Clause","Creative Commons CC0","Eclipse Public 1.0","GNU GPL v3","The Hippocratic 2.1","IBM Public 1.0","ISC","MIT","Mozilla Public 2.0"]
const licenseBadge=["[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
"[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
"[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
"[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
"[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
"[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)",
"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0"]
const fill =[];


inquirer
  .prompt([
    {
      type: 'input',
      message: questionss[0],
      name: "email",
    },
    {
      type: 'input',
      message: questionss[1],
      name: "github",
    },
    {
      type: 'input',
      message: questionss[2],
      name: "title",
    },
    {
        type: 'list',
        name: "license",
        message: questionss[3],
        choices: licenseopts,
    },
    {
      type: 'input',
      message: questionss[4],
      name: "descr",
    },
    {
        type: 'input',
        message: questionss[5],
        name: "install",
    },
    {
        type: 'input',
        message: questionss[6],
        name: "usage",
    },
    {
        type: 'input',
        message: questionss[7],
        name: "contr",
    },
    {
        type: 'input',
        message: questionss[8],
        name: "test",
    },
  ])
  .then( function savedata (response){
    mydata=response;
    orderinput(mydata)
    // writeToFile(mydata);
  }
  );


// function to manage inputs
function orderinput(data){
  const table ="## Table of Contents <br /> * [Installation Instructions](#installation-instructions) <br /> * [Usage Information](#usage-information) <br /> * [License](#license) <br /> * [Contribution Guidelines](#contribution-guidelines) <br /> * [Test Instructions](#tests-instructions) <br /> * [Questions](#questions)<br /> ";
  const Qs = ["For any questions, please reach me at: "+data.email+"<br/> To see more of my work, see my github: "+data.github];
  const tryy = `# ${data.title}
  ${licenseBadge[licenseopts.indexOf(data.license)]}
  ## Description 
  ${data.descr}
  ${table}
  ## Installation Instructions
  ${data.install}
  ## Usage Information
  ${data.usage}
  ## License
  This application is covered under the ${data.license} license. For more information click here: ${licenseBadge[licenseopts.indexOf(data.license)]}  
  ## Contribution Guidelines
  ${data.contr}
  ## Tests Instructions
  ${data.test}
  ## Questions
  If you have any questions, please contact me through email at: ${data.email}
  To see more of my work, see my Github profile: [${data.github}](https://github.com/${data.github})`;

  writeToFile(tryy)

}


// TODO: Create a function to write README file
function writeToFile(data) {
      fs.appendFile('README.md', `${data} \n `, (err) =>
      err ? console.error(err) : console.log('Creating README!')
    );    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//-------------------------------------------------------------------
