const inquirer = require('inquirer');

const questions = [
    {
        type: 'type',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: ['option1','option2','option3' ]

    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.cyan);
    console.log('  Seleccione una opción'.cyan);
    console.log('=========================='.cyan);

    const otp = await inquirer.prompt(questions);

    return otp;
}


module.exports = {
    inquirerMenu
}