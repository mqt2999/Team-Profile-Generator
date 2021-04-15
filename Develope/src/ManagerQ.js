const inquirer = require("inquirer");

function promptManager() {

    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'what is the name of the mangager?',
                name: 'managerName'
            },
            {
                type: 'input',
                message: 'waht is the mangers id?',
                name: 'managerId',
            },
            {
                type: 'input',
                message: 'what is the mangers email? ',
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: 'what is the mangers office number?',
                name: 'managerOffice'
            },
            {
                type: 'list',
                message: 'what is the role of the next Employee?',
                choices: ['Engineer', 'Intern', 'none'],
                name: 'endOcontinue'
            }

        ])


}


module.exports = promptManager;