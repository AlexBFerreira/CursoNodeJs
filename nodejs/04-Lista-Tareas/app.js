const colors = require('colors');
const { inquirerMenu } = require('./helpers/inquirer');

const main = async () => {
    let option = '';
    do {
        option = await inquirerMenu();
        console.log({option});
        // if(option !== '0') await pausa();
    } while ( option !== '0' );
}

main();