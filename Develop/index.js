// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// to install these packages:
//      npm i inquirer@8.2.4

var mydata={}
// TODO: Create an array of questions for user input
const questions = [];
const questionss = ["What is your Email?","What is your Github Username?",
"What is the NAME of your project?","What LICENSE will you use?",
"Write a DESCRIPTION of your project","How do you install your project?", 
"Enter USAGE INFORMATION", "Enter CONTRIBUTION GUIDELINES", "Enter TEST INSTRUCTIONS"];
const keys = ["email","github","title","license","descr","install","usage","contr","test"];

inquirer
  .prompt([
    {
      type: 'input',
      message: questionss[0],
      name: keys[0],
    },
    {
      type: 'input',
      message: questionss[1],
      name: keys[1],
    },
    {
      type: 'input',
      message: questionss[2],
      name: keys[2],
    },
    {
        type: 'input',
        message: questionss[3],
        name: keys[3],
    },
    {
      type: 'input',
      message: questionss[4],
      name: keys[4],
    },
    {
        type: 'input',
        message: questionss[5],
        name: keys[5],
    },
    {
        type: 'input',
        message: questionss[6],
        name: keys[6],
    },
    {
        type: 'input',
        message: questionss[7],
        name: keys[7],
    },
    {
        type: 'input',
        message: questionss[8],
        name: keys[8],
    },
  ])
  .then( function savedata (response){
    mydata=response;
    writeToFile(mydata);
  }
  );




// TODO: Create a function to write README file
function writeToFile(data) {
    const title = ["# "+data.title];
    const descr = ["<br/>## Description <br/>"+data.descr];
    const table = ["<br/>## Table of Contents <br/>"];
    const install = ["<br/>## Installation <br/>"+data.install];
    const usage = ["<br/>## Usage Information <br/>"+data.usage];
    const license = ["<br/>## License Information <br/>"+data.license];
    const contr = ["<br/>## Contributions <br/>"+data.contr];
    const tests = ["<br/>## Testing <br/>"+data.test];
    const Qs = ["<br/>## Questions <br/>For any questions, please reach me at: "+data.email+"<br/>To see more of my work, see: "+data.github];

    console.log("data",data);
    console.log("title",title);
    // fs.writeFile('README.md', process.argv[2], (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );

}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
