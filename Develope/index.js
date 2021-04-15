const fs = require('fs')
const inquirer = require('inquirer')
// const Employee = require('./lib/Employee.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const promptManager = require('./src/ManagerQ.js')
const head = require('./src/head-html.js')
const tail = require('./src/tail-html.js')
const promptEngineer = require('./src/EngineerQ.js')
const promptIntern = require('./src/InternQ.js')


let companyRoster = []

head()

startManager()

function startManager(){
promptManager().then((response) => {

    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
    companyRoster.push(manager)
    fs.appendFileSync('./dist/index.html', `<div class="col-6">
                    <div class="card mx-auto mb-3" style="width: 18rem">
                    <h5 class="card-header">${manager.getName()}<br /><br />Manager</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email Address: ${manager.getEmail()}</li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                    </div>
                </div>`, function (error) {
        console.log(error)
    })
    switch (response.endOcontinue) {
        case 'none':
            tail()
            break;
        case 'Engineer':
            spitEngineer()
            break;
        case 'Intern':
            spitIntern()
            break;


    }


})
}

function spitEngineer() {

    promptEngineer().then((engResponse) => {
        const engineer = new Engineer(engResponse.engineerName, engResponse.engineerId, engResponse.engineerEmail, engResponse.engineerGithub)
        companyRoster.push(engineer)
        fs.appendFileSync('./dist/index.html', `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${engineer.getName()}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email Address: ${engineer.getEmail()}</li>
                <li class="list-group-item">Github: ${engineer.getGithub()}</li>
            </ul>
            </div>
        </div>`, function (error) {
            console.log(error)
        })
        switch (engResponse.endOcontinue) {
            case 'none':
                tail()
                break;
            case 'Engineer':
                spitEngineer()
                break;
            case 'Intern':
                spitIntern()
                break;
        }
    })
}
function spitIntern() {

    promptIntern().then((internResponse) => {
        const intern = new Intern(internResponse.internName, internResponse.internId, internResponse.internEmail, internResponse.internSchool)
        companyRoster.push(intern)
        fs.appendFileSync('./dist/index.html', `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${intern.getName()}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email Address: ${intern.getEmail()}</li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
        </div>`, function (error) {
            console.log(error)
        })
        switch (internResponse.endOcontinue) {
            case 'none':
                tail()
                break;
            case 'Engineer':
                spitEngineer()
                break;
            case 'Intern':
                spitIntern()
                break;
        }
    })
}


