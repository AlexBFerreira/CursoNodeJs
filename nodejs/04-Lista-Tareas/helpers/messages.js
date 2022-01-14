const colors = require('colors');

const mostrarMensaje = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('=========================='.cyan);
        console.log('  Seleccione una opción'.cyan);
        console.log('=========================='.cyan);
        console.log(`${'1'.cyan}. Crear una tarea`);
        console.log(`${'2'.cyan}. Listar Teareas`);
        console.log(`${'3'.cyan}. Listar tareas completadas`);
        console.log(`${'4'.cyan}. Listar tareas pendientes`);
        console.log(`${'5'.cyan}. Completar tarea(s)`);
        console.log(`${'6'.cyan}. Borrar tarea`);
        console.log(`${'0'.cyan}. Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (option) => {
            readline.close();
            resolve(option);
        });
    });
}

const pausa = () => {
    
    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`\nPresione ${'ENTER'.cyan} para continuar\n`, (option) => {
            readline.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMensaje,
    pausa,
}
