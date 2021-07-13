const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
    it("getGithub () Should return github that is tester", () => {
        const github = "tester";
        const e = new Engineer("Ryan", 5, "test@test.com", github);

        //use getGithub function to get the github and if not it will fail
        expect(e.getGithub()).toBe(github);
    });
});