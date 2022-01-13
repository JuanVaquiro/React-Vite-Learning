
//Arreglo en js
// const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];

// operador spred crear "copias", extrae informacion
// del objeto, el operadod spread envia individualmente 
// cada uno de los elemnos 
let arreglo2 = [ ...arreglo, 5 ];
// arreglo2.push ( 5 );

//metodo map() crea un nuevo array 
const arreglo3 = arreglo2.map( function(numero) {
  return numero * 2;
});

const arreglo4 = arreglo3.map( (numero) => {
    return  numero * 2;
})


console.log( arreglo ); 
console.log( arreglo2 );
console.log( arreglo3 );
console.log( arreglo4 );