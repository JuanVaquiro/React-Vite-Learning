// operador condicional ternario 
// manera corta de hacer una decision
const activo = true;

let mensaje = '';

if ( !activo ) {
     mensaje = 'activo';
} else {
    mensaje = 'inantivo'
};

const mensaje1 = ( activo ) ? 'Activo' : 'Inactivo';

const mensaje3 = activo && 'Actico';

console.log( mensaje );
console.log( mensaje1 );
console.log( mensaje3 );