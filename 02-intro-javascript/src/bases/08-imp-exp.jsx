import heroes  from '../data/heroues';

// El método find() devuelve el valor del primer elemento 
// del array que cumple la función de prueba proporcionada.

const getHeroeById3 = (id) => {
 return heroes.find(element => element.id === 2);    
};

// const getHeroeById2 = (id) => {
//     return heroes.find( ( heroe ) => {
//         if( heroe.id === id ){
//             return true;
//         } else {
//             return false
//         }
//     } );    
// };

const getHeroeById = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id);    
   };
     

// console.log(getHeroeById(2)); 
// console.log(getHeroeById3(2));

export const getHeroesByOwner = ( owner ) => {
    return heroes.filter( ( prd ) => prd.owner === owner);
};

// console.log(getHeroesByOwner('DC'));
export default getHeroeById;