// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Manager = require('./Manager');

class Manager extends Manager {

    constructor(name, id, email, officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';

    }
    getOfficenumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;