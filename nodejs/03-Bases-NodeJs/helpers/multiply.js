const fs = require('fs');

let salida = "";

const crearArchivo = (base, listar = false, limite = 10) => {
    return new Promise((resolve, reject) => {
        for (let element = 1; element <= limite; element++) {
            salida += `${element} * ${base} = ${element * base}\n`;
        }
        listar ? console.log(salida) : null;
        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida)
        salida != "" ? resolve(`Tabla-${base}.txt`) : reject("No se pudo crear el archivo");
    });
}

module.exports = {
    crearArchivo,
};