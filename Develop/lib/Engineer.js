// TODO: Write code to define and export the Employee class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, school, gitHub) {

        super(name, id, school); //???
        this.gitHub = gitHub;
        this.role = 'Engineer';

    }

    getHub() {
        return this.gitHub;
    }

   
}

module.exports = Engineer;