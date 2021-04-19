const Manager = require("../lib/Manager.js")
describe("Manager", () => {
    it('should be able to be instanciated', () => {
        const g = new Manager()
        expect(typeof(g)).toBe('object')
    })
    describe('name',()=> {
        it("should have a name read in as the first argument", () =>{
            const name = "marquell";
            const g = new Manager(name)
            expect(g.name).toBe(name)
        })
        it("should have a function that returns the name", () =>{
            const name = "marquell";
            const g = new Manager(name)
            expect(g.getName()).toBe(name)
        })
    })
    describe('id',()=> {
        it("should have a id read in as the second argument", () =>{
            const id = 5543;
            const g = new Manager("name",id)
            expect(g.id).toBe(id)
        })
        it("should have a function that returns the id", () =>{
            const id = 5543;
            const g = new Manager("name",id)
            expect(g.getId()).toBe(id)
        })
    })
    describe("email",()=> {
        it("should have a email read in as the third argument", () =>{
            const email = "kjhfkdj@gmail.com" ;
            const g = new Manager("name",5543,email)
            expect(g.email).toBe(email)
        })
        it("should have a function that returns the email", () =>{
            const email = "kjhfkdj@gmail.com" ;
            const g = new Manager("name",5543,email)
            expect(g.getEmail()).toBe(email)
        })
    })
    describe("officeNumber",()=> {
        it("should have a officeNumber read in as the fourth argument", () =>{
            const officeNumber = 3344 ;
            const g = new Manager("name",5543,"email",officeNumber)
            expect(g.officeNumber).toBe(officeNumber)
        })
        it("should have a function that returns the office Number", () =>{
            const officeNumber = 3344 ;
            const g = new Manager("name",5543,"email",officeNumber)
            expect(g.getOfficeNumber()).toBe(officeNumber)
        })
    })
    describe("getRole",()=> {
        it("should have a method that returns the role", () =>{
            const g = new Manager("name",5543,"email","gksjdhf")
            expect(g.getRole()).toBe("Manager")
        })
    });
    
})