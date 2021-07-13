const Employee = require("../lib/Employee");

describe("Employee class", () => {
    it("getemail () Should return email address that is test@test.com", () => {
        const email = "test@test.com";
        const e = new Employee("Ryan", 5, email);

        //use getEmail function to get the email and if not it will fail
        expect(e.getEmail()).toBe(email);
    });

    it("getName () should return the name", () => {

        const name = "Ryan";
        const e = new Employee(name, 5, "test@test.com");

        expect(e.getName()).toBe(name);
    });

    it("getId () should return the id number", () => {
        const id = 5;
        const e = new Employee("Ryan", id, "test@test.com");

        expect(e.getId()).toBe(id);
    });
}); //these should go at the very end