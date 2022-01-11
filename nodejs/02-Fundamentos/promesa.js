const empleados = [
    {
        id: 1,
        nombre: "Alex"
    },
    {
        id: 2,
        nombre: "Gino"
    },
    {
        id: 3,
        nombre: "Victor"
    },
];

const salarios = [
    {
        id: 1,
        SalarioEnDolares: 1000
    },
    {
        id: 2,
        SalarioEnDolares: 2000
    },
    {
        id: 3,
        SalarioEnDolares: 2500
    },
];

const getEmpleado = (id) => {

    const promesa = new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id)?.nombre;

        if (!empleado) {
            reject(`No existe el empleado con id ${id}`);
        } else {
            resolve(empleado);
        }
    });
    return promesa;
}

const id = 4;

getEmpleado(id).then(
    empleado => console.log(empleado)
).catch(
    e => console.log(e)
);