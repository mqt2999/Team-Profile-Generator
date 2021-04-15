const inquirer = require("inquirer");

function promptIntern() {

   return  inquirer.prompt(
        [
            {
                type: 'input',
                message: 'what is the name of the Intern?',
                name: 'internName'
            },
            {
                type: 'input',
                message: 'waht is the Intern id?',
                name: 'internId',
            },
            {
                type: 'input',
                message: 'what is the Intern email? ',
                name: 'internEmail'
            },
            {
                type: 'input',
                message: 'what is the Interns School?',
                name: 'internSchool'
            },
            {
                type: 'list',
                message: 'what is the role of the next Employee?',
                choices: ['Engineer', 'Intern', 'none'],
                name: 'endOcontinue'
            }

        ])


}


module.exports = promptIntern;