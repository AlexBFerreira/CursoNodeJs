// las variables con var son una mala práctica :C, in their place you should use let
var nombre = "Wolverine"; 

// let es el standart que se debe utilizar
let nombreLet = "DeadPool";

// const es la palabra reservada para declarar un valor constante el cual obviamente no va a cambiar
// una vez declarado no lo puedes, de hecho si lo intentas te va a lanzar error
const constante = "Thanos";

if(true) {
    // No está mal que te permita re nombrar pero puede llegar a causar un dato no esperado
    var nombre = "Magneto"; 

    // puedes declarar distintas variables con el mismo nombre y van a tener distintos alcances siempre
    // siempre y cuando se encuentren en distintas estructuras o simplemente cambiar el valor según el caso 
    // pero hay que estar pendiente de esto porque esto puede causar datos inesperados
    nombreLet = "Bad DeadPool";
    
    // constante = "Ultron"; // quita el comentario para que veas :D
    // console.log(`\n\n\n ${constante} \n\n\n`);
}

console.log(`\n\n\n ${nombre} \n\n\n`);
console.log(`\n\n\n ${nombreLet} \n\n\n`);