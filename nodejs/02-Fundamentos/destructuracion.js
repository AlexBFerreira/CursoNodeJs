const deadpool = {
    nombre:   "Wade",
    apellido: "Winston",
    poder:    "Regeneracion",
    getNombre() {
        return `
        nombre: ${this.nombre} 
        apellido: ${this.apellido} 
        poder: ${this.poder}
        `
    }
}
// console.log(deadpool.getNombre());

const nombre = deadpool.nombre; 
const apellido = deadpool.apellido;
const poder = deadpool.poder;


const { nombre, apellido, poder } = deadpool;

console.log(`${nombre} ${apellido} ${poder}`);
