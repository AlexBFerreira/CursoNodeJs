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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;
    empleado ? callback(null, empleado) : callback(`Empleado con ${id} no existe :c`);
}

const getSalario = (id, callback) => {
    const salario = salarios.find(e => e.id ===id).SalarioEnDolares;
    salario ? callback(null, salario) : callback(`Salarios para el ${id} no existe :c`);
}

getEmpleado(2, (error, empleado) => {
    if (error) {
        console.log("¡¡Error!!");
        return console.log(error);
    }
    console.log(empleado); 
});

getSalario(2, (error, salario) => { 
    if(error) {
        console.log("¡¡Error!");
        return console.log(error);
    }
    console.log(salario);
});