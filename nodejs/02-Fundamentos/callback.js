// los callback no son mas que funciones que se van a ejecutar despues de cierto tiempo (ojo, no se deben confundir con promesas o futuros), por ejemplo un SetTimeOut() es un callback porque
// se ejecuta luego de cierto tiempo que en este caso es luego de 1500 ms que son 1,5 seg, una cosa importante de las funciones es que se les puede pasar funciones como argumentos
// los cuales se hacen bajo la siguiente sintaxis, no tiene que ser una funcion de flecha ni nada para ellos pero funciona super bien y puede llegar a ser muy util


//funcion de flecha
const getUserById = (id, callback) => {
  const usuario = {
    id,
    usuario: "Alexander",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};


//sin funcion de flecha
getUserById(5, (usuario) => {
  console.log(usuario);
});

function getUserById2(id, callback) {
  let user = {
    id,
    usuario: "Alex",
  };

  setTimeout(() => callback(user), 1500);
}

getUserById2(10, (user) => console.log(user));
