const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee')

var g = new Employee ('marquell',333,"yeyeyeye")

var array =[
    {
        type:'list',
        message:'what is the employees role?',
        choices:['Employee','Engineer','Intern','Manager'],
        name: 'role'
    },
    {
        type:'input',
        message: 'Enter the name of the employee',
        name: 'nameOF'
    },
    {
        type: 'input',
        message: 'Enter the id of the Empoylee',
        name: 'idOf'
    },
    {
        type:'input',
        message: 'Enter the Employees E-mail',
        name: 'emailOf'
    }
]


    inquirer.
    prompt(array)
    .then((response) => {
        console.log(response)
    });