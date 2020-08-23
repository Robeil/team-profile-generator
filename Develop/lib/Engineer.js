// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Engineer = require('./Engineer');

class Engineer extends Engineer {

    constructor(name, id, email, school) {

        super(name, id, school); //???

        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return this.employee;
    }

}

module.exports = Engineer;