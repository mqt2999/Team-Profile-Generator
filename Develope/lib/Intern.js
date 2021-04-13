 // Importing the parent class 
const Employee = require('./Employee')
// Intern class that extends Employee
class Intern extends Employee {
    constructor(name, id ,email, school){
        // passes name id email to the parent class 
        super(name,id,email)
        this.school = school;
    }
    // method returns scchool
    getSchool(){
        return this.school
    }
    // method overrides parent and returns the role
    getRole(){
        return 'Intern'
    }
}