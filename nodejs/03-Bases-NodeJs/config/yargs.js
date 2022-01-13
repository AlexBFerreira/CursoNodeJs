const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            describe: 'base is the number for the multiplication table ',
        }, 'l': {
            alias: 'listar',
            type: 'boolean',
            describe: 'Show the result of the comand line',
            default: false,
        }, 'h': {
            alias: 'hasta',
            type:'number',
            describe: 'Límite de veces a multiplicar por la base',
            default: 10,
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "The base must be a number";
        }
        if(isNaN(argv.h)) {
            throw "hasta must be a number";
        }
        return true;
    }).argv;

module.exports = argv;