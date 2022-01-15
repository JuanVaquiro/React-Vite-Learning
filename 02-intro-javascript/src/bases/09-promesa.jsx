import getHeroeById from './bases/08-imp-exp'
// promesa 

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos despues');
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve( heroe );
//         // reject( 'no se puedo encontrar el heroe ');
//     }, 2000 )
// });

// //metodo  si la promesa cumple(funciona)
// miPromesa.then( ( getHeroe ) => {
//     console.log('heroe', getHeroe );
// })
// .catch( error => console.warn( error ) );

const getHeroeByIdAsync = ( id ) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById( id );
            if ( heroe ) {
                resolve( heroe );
            } else {
                reject( 'error, no se encuentra el heroe' );
            }    
            }, 2000 )
        });
};

getHeroeByIdAsync(4)
.then(
    console.log
)
.catch(
    error => console.warn( error )
)