const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, github, email) {
        super(name, 1234, 'melissarmand@gmail.com' );
        this.github = github;
    }

}

module.exports = Engineer;