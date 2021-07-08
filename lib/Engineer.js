const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, github) {
        super(name, id, email);
        this.github = github;

        this.getGithub = () => {
            console.log(`Thank you for adding your github username: ${this.github}.`)
            return this.github
        };
    };
}

module.exports = Engineer;