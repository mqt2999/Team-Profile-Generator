const Employee = require('../lib/Employee.js')
describe('Employee', () => {

        it("should be able to be created ", () => {
            const g = new Employee()
            expect(typeof (g)).toBe('object');
        })

    describe('name', () => {
        it('be able to be created with a name argument passsed through', () => {
            const name = "Marquell";
            const g = new Employee(name)
            expect(g.name).toBe(name)
        })
        it('a method can be called and return the name', () => {
            const name = "Marquell";
            const g = new Employee(name)
            expect(g.getName()).toBe(name)
        })

    })
    describe('id', () => {
        it('should be created with an id as its second argument', () => {
            const id = 6698
            const g = new Employee("marquell",id);
            expect(g.id).toBe(id)
        })
        it('a method can be called and return the id', () => {
            const id = 6698
            const g = new Employee("marquell",id);
            expect(g.getId()).toBe(id)
        })
    })
    describe('email', () => {
        it('should be created with an email as its third argument', () => {
            const email = "jfhkjdfh@gmail.com"
            const g = new Employee("marquell",6698,email);
            expect(g.email).toBe(email)
        })
        it('a method can be called and return the email', () => {
            const email = "jfhkjdfh@gmail.com"
            const g = new Employee("marquell",6698,email);
            expect(g.getEmail()).toBe(email)
        })
    })
    describe('getRole', () => {
        it('should return a role when method is called', () => {
            const role = "Employee" 
            const g = new Employee("name",3,"fkjhdfkjh")
            expect(g.getRole()).toBe(role)
        })
    })

})