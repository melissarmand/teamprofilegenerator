const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

        this.getOfficeNumber = () => {
            console.log(`Office ${this.officeNumber} has the best views.`)
            return this.officeNumber
        };
    };
   

}


module.exports = Manager;