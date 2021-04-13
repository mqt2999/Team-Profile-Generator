//importing the parent class Employee
const Employee = requier('./Employee')
//Engineer class that extends parent class Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //passes the name id and email to the parent class 
        super(name, id, email)
        this.github = github;
    }
    //returns the github name 
    getGithub() {
        return this.github;
    }
    //overrides the parent method and returns Engineer
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;