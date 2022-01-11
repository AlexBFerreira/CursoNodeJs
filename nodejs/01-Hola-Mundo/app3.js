console.log("Inicio del programa"); //1


setTimeout(() => {
    console.log("Primer Time Out"); //5
}, 3000);


setTimeout(() => {
    console.log("Segundo Time Out"); //2
}, 0);


setTimeout(() => {
    console.log("Tercer Time Out"); // 3
}, 0);


console.log("Fin del programa"); // 4