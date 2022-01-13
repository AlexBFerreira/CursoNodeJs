const fs = require('fs');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let salida = "";

const crearArchivo = (base, listar = false, limite = numeros) => {


    return new Promise((resolve, reject) => {
        for (let element = 1; element <= limite; element++) {
            salida += `${element} * ${base} = ${element * base}\n`;
        }

        listar ? console.log(salida) : null;

        fs.writeFileSync(`Tabla-${base}.txt`, salida)

        salida != "" ? resolve(`Tabla-${base}.txt`) : reject("No se pudo crear el archivo");
    })


}

module.exports = {
    crearArchivo,
};