const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js')
const g = new Employee('msdkhf',7656,'fjhdf')
var companyRoster = []

var array =[
    {
        type:'list',
        message:'what is the employees role?',
        choices:['Engineer','Intern','Manager'],
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
        let specificCharacter;
        let charRole;
        if(response.role === "Engineer"){
            specificCharacter= 'GitHub'
            charRole = 'Engineer'
        }
        else if(response.role === "Intern"){
            specificCharacter = 'School'
            charRole = 'Intern'
        }
        else if(response.role === "Manager"){
            specificCharacter = 'Office Number'
            charRole = 'Manager'
        }
        
        inquirer.prompt(
            [{
                type:'input',
                message: `enter the ${charRole}'s ${specificCharacter} `,
                name: 'specificCharacter'
            },
            {
                type:'list',
                message:'Would ou like to add another Employee?',
                choices: ['yes','no'],
                name: 'add'
            }])
        .then((response) =>{
            console.log(response)

            
        })
    })
    