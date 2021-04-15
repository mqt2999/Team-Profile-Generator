const { timingSafeEqual } = require('crypto')
const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const promptManager = require('./src/ManagerQ.js')
const head = require('./src/head-html.js')
const tail = require('./src/tail-html.js')


let companyRoster = []

  head()  

promptManager().then((response) => {

    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
    companyRoster.push(manager)
    

fs.appendFileSync('./dist/index.html',`<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${manager.getName()}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.getId()}</li>
                <li class="list-group-item">Email Address: ${manager.getEmail()}</li>
                <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
        </div>`, function (error){
    console.log(error)
})

 tail()    
    
})


   

