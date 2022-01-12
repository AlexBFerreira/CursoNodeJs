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

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const sueldo = await getSueldo(id);
        return `El empleado ${empleado} tiene un sueldo de ${sueldo}`;
    } catch (error) {
        return error;
    }
}

const id = 3;

getInfoUsuario(id).then(msg => console.log(msg)).catch(error => console.log(error));
