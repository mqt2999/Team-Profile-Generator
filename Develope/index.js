//imported files
const fs = require('fs')
const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js')
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const Manager = require('./lib/Manager.js')
const promptManager = require('./src/ManagerQ.js')
const head = require('./src/head-html.js')
const tail = require('./src/tail-html.js')
const promptEngineer = require('./src/EngineerQ.js')
const promptIntern = require('./src/InternQ.js')

//array of objects
let companyRoster = []

//adding the first part of the html to the file
head()

//startign the program by prompting the manager method
startManager()

function startManager() {

    //prompts a imported method
    promptManager().then((response) => {

        //creates a new manager object
        const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
        //adds the manager object to an array 
        companyRoster.push(manager)
        //adding the anaswers to html code and appending the html code to the html file
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
        //a switch case for ending the program or adding anothe employee to the roster
        switch (response.endOcontinue) {
            case 'none':
                //appends the end of the html code to the file
                tail()
                break;
            case 'Engineer':
                //prompts the engineer questions and appends the html code to the html file with answers
                spitEngineer()
                break;
            case 'Intern':
                //prompts the Intern questions and appends the html code to the html file with answers
                spitIntern()
                break;


        }


    })
}
function spitEngineer() {
    //prompts a imported method 
    promptEngineer().then((engResponse) => {

        //creats a new Engineer object 
        const engineer = new Engineer(engResponse.engineerName, engResponse.engineerId, engResponse.engineerEmail, engResponse.engineerGithub)
        //pushes the engineer object to an array 
        companyRoster.push(engineer)
        //adds the html code with answers to the html file 
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
        //a switch case for ending the program or adding anothe employee to the roster
        switch (engResponse.endOcontinue) {
            case 'none':
                //appends the end of the html code to the file
                tail()
                break;
            case 'Engineer':
                //recurssive call to add another engineer
                spitEngineer()
                break;
            case 'Intern':
                //prompts the Intern questions and appends the html code to the html file with answers
                spitIntern()
                break;
        }
    })
}
function spitIntern() {

    //prompts a imported method
    promptIntern().then((internResponse) => {
        //creates a intern object
        const intern = new Intern(internResponse.internName, internResponse.internId, internResponse.internEmail, internResponse.internSchool)
        //adds the intern object to an array
        companyRoster.push(intern)
         //adding the anaswers to html code and appending the html code to the html file
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
        //a switch case for ending the program or adding another intern to the roster
        switch (internResponse.endOcontinue) {
            case 'none':
                //appends the end of the html code to the file
                tail()
                break;
            case 'Engineer':
                //prompts the engineer questions and appends the html code to the html file with answers
                spitEngineer()
                break;
            case 'Intern':
                //recursive call to add another Intern
                spitIntern()
                break;
        }
    })
}