//Creating a Employee class that will be the parent to all other classes
class Employee {
    //Constructor that reads in the states of the employee class    
    constructor(name, id, email) {

        this.name = name

        this.id = id

        this.email = email

    }
    //method that return the name of the employee 
    getName() {
        return this.name;
    }
    // Method that return the id of the employee 
    getId() {
        return this.id;
    }
    // Method that returns the email of the employee 
    getEmail() {
        return this.email;
    }
    //a method that will return the role of the employee and will be over ridden in the child classes 
    getRole() {
        return 'Employee';
    }
}