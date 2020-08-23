module.exports(


manager: [

    {
        type: 'input',
        name: '',
        message: ''
    },

    {
        type: 'input',
        name: 'OfficeId',
        message: 'What is your office Id?'

    },

    {

    },
    employeeChoices = [
        {
            type: 'list',
            name: 'employeeChoice',
            message: 'What type of memeber would you you like to add to the team?',
            choices: [
                'Engineer',
                'Intern',
                'Manager'
            ]
        }
    ]

]
)