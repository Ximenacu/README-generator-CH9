# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

## Notes 
In order to install inquirer, please use:  npm i inquirer@8.2.4.
The application will be invoked by using the following command:
node index.js

## User Story 
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria 
GIVEN a command-line application that accepts user input
* WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

* WHEN I enter my project title
THEN this is displayed as the title of the README

* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

* WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

* WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

* WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

* WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Guidelines 
* Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

* Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

* Refer to the Video Submission Guide on the Full-Stack Blog for additional guidance on creating a video.
https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

## Deliverables 
* A sample README generated using the application must be submitted.
* Your GitHub repository containing your application code.
* Walkthrough Video 

## Walkthrough Video 

* A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

## Technical Acceptance 
* Uses the Inquirer package 

* Repo quality 

