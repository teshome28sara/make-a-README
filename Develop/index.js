// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// console.log("welcome to  README generator")
// console.log("please answer the following questions to generate a professional README for your project");

// TODO: Create an array of questions for user input
// const questions = () => {
//     // using inquirer to prompt questions to user 
//     return inquirer.prompt([
   
    const questions = () => {
        // using inquirer to prompt questions to user 
        return inquirer.prompt([
    {
        type: "input",
        message: "what is the title of the project",

        name: "title",
        validate: your_title => {
            if(your_title){
                return true;
            }else{
                console.log("enter a title of the project to continue")
                return false;
            }
        }

    },
    // project discription
    {
        type: "input",
        message: "please enter a discription of the project",
        name: "discription",
        validate: your_discription  => {
            if(your_discription){
                return true;
            }else{
                console.log("enter a discription  of the project to continue")
                return false;
            }
        }

    },
    // Installation
    {
        type: "input",
        message: "What are the steps needed  to install your project",
        name: "installation",
        validate: your_installation  => {
            if(your_installation){
                return true;
            }else{
                console.log("enter steps of installation  to continue")
                return false;
            }
        }

    },
    // usage info
    {
        type: "input",
        message: "How do you use this application/project",
        name: "usage",
        validate: your_usage  => {
            if(your_usage){
                return true;
            }else{
                console.log("enter  how to use the project  to continue")
                return false;
            }
        }


    },
    // Licensing
    {
        type: "checkbox",
       
        message: "choose a license for your project",
        choices: ['Apache', 'GNU', 'MPL 2.0', 'MIT', 'none'],
        name: "license",
        validate: your_license => {
            if(your_license){
                return true;
            }else{
                console.log("please select a choice to continue")
                return false;
            }
        }
    },
    // contribution
    {
        type: "input",
        name: "contribution",
        message: "How can people contribute to this project",
        validate: your_contribution => {
            if(your_contribution){
                return true;
            }else{
                console.log("please provide information on how to contribute to this project")
                return false;
            }
        }

    },
    // Test
    {
        type: "input",
        name: "test",
        message: "How does the user test this project",
        validate: your_test => {
            if(your_test){
                return true;
            }else{
                console.log("Explain how to test this project")
                return false;
            }
        }
    },


    // Github username
    {
        type: "input",
        name: "Github",
        message: "Enter your Github username",
        validate: your_Github => {
            if(your_Github){
                return true;
            }else{
                console.log("please enter your Github username")
                return false;
            }
        }
    },
    // Email address
    {
        type:  "input",
        name: "email",
        message: "enter your email for those who have questions about this project",
        validate: your_email => {
            if(your_email){
                return true;
            }else{
                console.log("please provide your email address")
                return false;
            }
        }
    }
])
}


       
    






// TODO: Create a function to write README file
// function writeToFile(fileName, data){
//     fs.writeFile(fileName ,data, (err) => {
//         if(err){
//             console.log(error)
//             return
//         }else{
//             console.log("success")
//         }
//     })
// }

// function init(){
//     inquirer.prompt(questions)
//     .then(function(userInput){
//         console.log(userInput)
//         writeToFile('README.md', generateMarkdown(userInput))

//     })
// }
// init();

    const writeFile = data => {
    
        fs.writeFile('README.md' , data, err => {

        
        if(err){
             console.log(err);
             return
        }else{
        console.log("success!")
        }
    })
};

// TODO: Create a function to initialize app
questions()
// getting user input 
.then(answers => {
    return generateMarkdown(answers);
})
// // using data to display on page 
.then(data => {
    return writeFile(data);
})
// // catching errors 
.catch(err => {
    console.log(err)
})
