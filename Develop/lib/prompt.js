module.exports(


    manager = [

        {
            type: 'input',
            name: 'name',
            message: 'Please enter the Employee\'s name:?'
        },

        {
            type: 'list',
            name: 'role',
            message: 'Please select the Employee\'s role:?',
            choices: [
                'Manager',
                'Engineer',
                'Intern'
            ]
        },

        {
            type: 'input',
            name: 'Id',
            message: 'What is your Employee\'s Id:?'

        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter the employee\'s Email:?'
        },

        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the Employee's Office Number:",
            when: (answers) => {
                if (answers.role === "Manager") {
                    return true;
                }
            }
        },

        {
            type: "input",
            name: "github",
            message: "Please enter the Employee's GitHub Account:",
            when: (answers) => {
                if (answers.role === "Engineer") {
                    return true;
                }
            }
        },

        {
            type: "input",
            name: "school",
            message: "Please enter the Employee's School:",
            when: (answers) => {
                if (answers.role === "Intern") {
                    return true;
                }
            }
        }
        /*
    employeeChoices = [
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'What type of memeber would you you like to add to the team:?',
            choices: [
                'Engineer',
                'Intern',
                'Manager'
            ]
        }
    ]
*/
    ]);


init = () => {
    console.log("Please enter your first employee.");
    readyToRender();
}

init();