const empleados = [
  {
    id: 1,
    nombre: "Alex",
  },
  {
    id: 2,
    nombre: "Gino",
  },
  {
    id: 3,
    nombre: "Albert",
  },
  {
    id: 4,
    nombre: "Victor",
  },
];

const sueldos = [
  {
    id: 1,
    monto: 1000,
  },
  {
    id: 2,
    monto: 2000,
  },
  {
    id: 3,
    monto: 2500,
  },
];

const areas = [
  {
    id: 1,
    nombre: 'Desarrollo'
  },
  {
    id: 2,
    nombre: 'Soporte Técnico'
  },
  {
    id: 3,
    nombre: 'DevOps'
  },
];

const getEmpleado = (id) => {
  return new Promise((resolve, rejected) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado
      ? resolve(empleado)
      : rejected(`No existe empleado con el id ${id}`);
  });
};

const getSueldo = (id) => {
  return new Promise((resolve, rejected) => {
    const sueldo = sueldos.find((e) => e.id === id)?.monto;
    sueldo ? resolve(sueldo) : rejected(`No existe sueldo para el id ${id}`);
  });
};

const getArea = (id) => {
  return new Promise((resolve, rejected) => {
    const area = areas.find(e => e.id === id)?.nombre;
    area ? resolve(area) : rejected(`No existe área para el id ${id} `);
  });
}

const id = 1;

let nombre;
let salario;

getEmpleado(id)
.then((empleado) => {
  nombre = empleado;
  return getSueldo(id);
})
.then((sueldo) =>{
  salario = sueldo;
  return getArea(id);
}).then((area) => {
  
  console.log(`El empleado: ${nombre} que esta en el área ${area} tiene un sueldo de ${salario}`)
}).catch((error) => console.log(error));

// getEmpleado(id).then((success) => {
//     console.log(success);
//     getSueldo(id).then(
//         success => console.log(success)
//     ).catch(
//         error => console.log(error)
//     );

// }).catch(error => console.log(error));