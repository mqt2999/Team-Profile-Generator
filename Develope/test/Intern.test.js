const Intern = require("../lib/Intern.js")
describe("Intern", () => {
    it('should be able to be instanciated', () => {
        const g = new Intern()
        expect(typeof(g)).toBe('object')
    })
    describe('name',()=> {
        it("should have a name read in as the first argument", () =>{
            const name = "marquell";
            const g = new Intern(name)
            expect(g.name).toBe(name)
        })
        it("should have a function that returns the name", () =>{
            const name = "marquell";
            const g = new Intern(name)
            expect(g.getName()).toBe(name)
        })
    })
    describe('id',()=> {
        it("should have a id read in as the second argument", () =>{
            const id = 5543;
            const g = new Intern("name",id)
            expect(g.id).toBe(id)
        })
        it("should have a function that returns the id", () =>{
            const id = 5543;
            const g = new Intern("name",id)
            expect(g.getId()).toBe(id)
        })
    })
    describe("email",()=> {
        it("should have a email read in as the third argument", () =>{
            const email = "kjhfkdj@gmail.com" ;
            const g = new Intern("name",5543,email)
            expect(g.email).toBe(email)
        })
        it("should have a function that returns the email", () =>{
            const email = "kjhfkdj@gmail.com" ;
            const g = new Intern("name",5543,email)
            expect(g.getEmail()).toBe(email)
        })
    })
    describe("school",()=> {
        it("should have a github read in as the fourth argument", () =>{
            const school = "jefstar" ;
            const g = new Intern("name",5543,"email",school)
            expect(g.school).toBe(school)
        })
        it("should have a function that returns the github", () =>{
            const school = "jefstar" ;
            const g = new Intern("name",5543,"email",school)
            expect(g.getSchool()).toBe(school)
        })
    })
    describe("getRole",()=> {
        it("should have a method that returns the role", () =>{
            const g = new Intern("name",5543,"email","gksjdhf")
            expect(g.getRole()).toBe("Intern")
        })
    });
    
})