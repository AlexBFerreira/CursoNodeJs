const { crearArchivo } = require('./helpers/multiply');
const argv = require('./config/yargs');


// console.log(argv);
// console.log("base ", argv.base);


// let base = 8;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
    .catch(error => console.log(error));
