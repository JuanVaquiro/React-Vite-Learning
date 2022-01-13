//objetos liaterales 

const persona = {
  nombre: 'Tony',
  apellido: 'stark',
  edad: 22,
  direccion:{
    cuidad: 'zipd',
    zip: 123123,
    lat: 12.3334,
    lng: 23.0012,

  }
};

console.log( persona );
// console.table( persona ); 

//Operador spread: hacer un clon de un objeto o extraer cada propiedad 
// y asiganarlas a un nuevo objeto
const persona2 = { ...persona };
persona2.nombre = 'peter';

console.log( persona );
console.log( persona2 );
