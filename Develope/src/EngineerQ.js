const inquirer = require("inquirer");

function promptEngineer() {

   return  inquirer.prompt(
        [
            {
                type: 'input',
                message: 'what is the name of the Engineer?',
                name: 'engineerName'
            },
            {
                type: 'input',
                message: 'waht is the Engineer id?',
                name: 'engineerId',
            },
            {
                type: 'input',
                message: 'what is the Engineer email? ',
                name: 'engineerEmail'
            },
            {
                type: 'input',
                message: 'what is the Engineer\'s office Github?',
                name: 'engineerGithub'
            },
            {
                type: 'list',
                message: 'what is the role of the next Employee?',
                choices: ['Engineer', 'Intern', 'none'],
                name: 'endOcontinue'
            }

        ])


}


module.exports = promptEngineer;