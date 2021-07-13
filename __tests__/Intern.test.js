const Intern = require("../lib/Intern");

describe("Intern class", () => {
    it("getSchool () Should return School that is Test U", () => {
        const school = "Test U";
        const e = new Intern("Ryan", 5, "test@test.com", school);

        //use getSchool function to get the school and if not it will fail
        expect(e.getSchool()).toBe(school);
    });
});