const Engineer = require("../lib/Engineer.js")
describe("Engineer", () => {
    it('should be able to be instanciated', () => {
        const g = new Engineer()
        expect(typeof(g)).toBe('object')
    })
    describe('name',()=> {
        it("should have a name read in as the first argument", () =>{
            const name = "marquell";
            const g = new Engineer(name)
            expect(g.name).toBe(name)
        })
        it("should have a function that returns the name", () =>{
            const name = "marquell";
            const g = new Engineer(name)
            expect(g.getName()).toBe(name)
        })
    })
    describe('id',()=> {
        it("should have a id read in as the second argument", () =>{
            const id = 5543;
            const g = new Engineer("name",id)
            expect(g.id).toBe(id)
        })
        it("should have a function that returns the id", () =>{
            const id = 5543;
            const g = new Engineer("name",id)
            expect(g.getId()).toBe(id)
        })
    })
    describe("email",()=> {
        it("should have a email read in as the third argument", () =>{
            const email = "kjhfkdj@gmail.com" ;
            const g = new Engineer("name",5543,email)
            expect(g.email).toBe(email)
        })
        it("should have a function that returns the email", () =>{
            const email = "kjhfkdj@gmail.com" ;
            const g = new Engineer("name",5543,email)
            expect(g.getEmail()).toBe(email)
        })
    })
    describe("github",()=> {
        it("should have a github read in as the fourth argument", () =>{
            const github = "jefstar" ;
            const g = new Engineer("name",5543,"email",github)
            expect(g.github).toBe(github)
        })
        it("should have a function that returns the github", () =>{
            const github = "jefstar" ;
            const g = new Engineer("name",5543,"email",github)
            expect(g.getGithub()).toBe(github)
        })
    })
    describe("getRole",()=> {
        it("should have a method that returns the role", () =>{
            const github = "jefstar" ;
            const g = new Engineer("name",5543,"email",github)
            expect(g.getRole()).toBe("Engineer")
        })
    });
    
})