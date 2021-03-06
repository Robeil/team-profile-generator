const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
//const prompt = require('./lib/prompt.js');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./lib/htmlRenderer');

const teamArray = [];

managerQ = [

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
        name: "officeNummber",
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
];

employeeChoice = [{
    type: 'list',
    name: 'employeeChoice',
    message: 'What type of memeber would you you like to add to the team:?',
    choices: [
        'Engineer',
        'Intern',
        'end'
    ]
}];

async function init() {

//     let answers = await inquirer.prompt(managerQ);
// console.log(answers);
//     const manager = new Manager(

//         answers.name,
//         answers.Id,
//         answers.email,
//         answers.officeNummber
//     )
//     teamArray.push(manager);
   addManager();
    /* addEngineer();
    addManager();
    addIntern(); */
}



/// addmember function
async function addMember() {
    console.log("ADD MEMEBER")

    const choice = await inquirer.prompt(employeeChoice);

    switch (choice.employeeChoice) {

        case 'Engineer':
            await addEngineer();
            break;

        case 'Intern':
            await addIntern();
            break;

        case 'end':
            buildTeam();
    }

}
//add Engineer function

async function addEngineer() {



    let answers = await inquirer.prompt(managerQ);

    const manager = new Engineer(

        answers.name,
        answers.Id,
        answers.email,
        answers.github
    )
    teamArray.push(manager);
    addMember();

}

// add maanger function
async function addManager() {

    const answers = await inquirer.prompt(managerQ);
    const manager = new Manager(

        answers.name,
        answers.Id,
        answers.email,
        answers.officeNummber
    )
    teamArray.push(manager);
    addMember();

    

}
// add intern function

async function addIntern() {


    let answers = await inquirer.prompt(managerQ);

    const manager = new Intern(

        answers.name,
        answers.Id,
        answers.email,
        answers.school
    )
    teamArray.push(manager);
    addMember();


}
// init function for the questons.....

buildTeam = () => {
    console.log(teamArray);
    fs.writeFile('./output/team.html',  render(teamArray), "utf-8", (err) => {
        if (err) throw err;
    });
    console.log("Please enter your first employee.");
}

init();

// add engineer ----> addMember

//add intern ------> addMember

//build team
// ******************************************************************

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```