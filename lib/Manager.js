const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, officeNumber, email) {
        super(name, 1234, 'melissarmand@gmail.com' );
        this.officeNumber = officeNumber;
    }

}
module.exports = Manager;