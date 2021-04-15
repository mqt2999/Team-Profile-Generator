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
    
    const responseOne = response
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOffice)
    companyRoster.push(manager)
    
    
})

    tail()

