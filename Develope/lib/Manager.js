//importing the parent class Employee 
const Employee = require('./Employee')
//Manager class that extends Employee
class Manager extends Employee {
    //constructor reads in class information
    constructor(name,id,email,officeNumber){
        //passes name id email to parent class
        super(name,id,email)
        this.officeNumber = officeNumber;
    }
    // method returns office number 
    getOfficeNumber(){
        return this.officeNumber;
    }
    // method overrides the parent class and returns the role
    getRole(){
        return 'Manager';
    }
}
module.exports = Manager;