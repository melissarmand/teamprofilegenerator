const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school, email) {
        super(name, 1234, 'melissarmand@gmail.com' );
        this.school = school;
    }

}

module.exports = Intern;