const Manager = require("../lib/Manager");

describe("Manager class", () => {
    it("getOfficeNumber () Should return number that is 12", () => {
        const officeNumber = "12";
        const e = new Manager("Ryan", 5, "test@test.com", officeNumber);

        //use getOfficeNumber function to get the officeNumber and if not it will fail
        expect(e.getOfficeNumber()).toBe(officeNumber);
    });
});