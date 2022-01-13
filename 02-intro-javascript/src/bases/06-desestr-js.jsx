// Desestructuracion 

//objeto literal
const persona = {
    nombre: 'tony',
    edad: 25,
    clave: 'Ironman'
};

//extraer del objeto persona 
const { edad, clave, nombre } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const userContext = ( {clave, nombre, edad, rango='elite'} ) => 
{
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 12.33,
            lng: -12.00
        }
    }

};

const  { nombreClave, anios, latlng:{ lat, lng } } = userContext( persona );
 // const{lat, lng} = latlng;

console.log( nombreClave, anios );
console.log(lat, lng);