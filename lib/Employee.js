class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = () => {
           // console.log(`Hello, ${this.name}.`)
        this.getId = () => {
           // console.log(`This is your ID: ${this.id}.`);
        this.getEmail = () => {
           // console.log(`Thank you for entering your email as: ${this.email}.`);
        }
    }};   

    }
}

// const tisha = new Employee('Tisha', '1234', 'melissarmand@gmail.com');

// tisha.getName();
// tisha.getId();
// tisha.getEmail();



    




module.exports = Employee;