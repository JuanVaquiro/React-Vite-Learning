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


let promise = new Promise(function(resolve, reject) {
    // la función se ejecuta automáticamente cuando se construye la promesa
  
    // después de 1 segundo, indica que la tarea está hecha con el resultado "hecho"
    setTimeout(() => resolve("hecho"), 1000);
});

promise.then()

//   Promise {<pending>}
//   [[Prototype]]: Promise
//   [[PromiseState]]: "fulfilled"
//   [[PromiseResult]]: "echo"
  

let promiseReject = new Promise(function(resolve, reject) {
  // después de 1 segundo, indica que la tarea ha finalizado con un error
  setTimeout(() => reject(new Error("¡Vaya!")), 1000);
});

promiseReject.catch()

/* Promise {<pending>}
 [[Prototype]]: Promise
 [[PromiseState]]: "rejected"
 [[PromiseResult]]: Error: ¡Vaya! at <anonymous>:3:27
*/