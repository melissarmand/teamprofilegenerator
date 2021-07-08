const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name, id, email);
        this.school = school;

        this.getSchool = () => {
            console.log(`${this.school} is the best school of all time!`)
            return this.school
        };
    };

}

module.exports = Intern;