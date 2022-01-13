//funciones en js

// const saludar = function( nombre ) {
//   return `hola, ${ nombre }`;
// }

const saludar2 = ( nombre ) => {
  return `hola, ${ nombre }`;
}

const saludar3 = ( nombre ) =>  `hola, ${ nombre }`;

console.log( saludar2('juan') );
console.log( saludar3('david') );

const getUser = () => ({
  uid: 'AD001',
  username: 'Pablo'
});

const user = getUser();
console.log(user);

function getUsuarioActivo( nombre ) {
  return {
    uid: 'abc100',
    username: nombre
  } 
};

//retornar un objeto implicito 
const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'abc200',
    username: nombre
  }
);

const usuarioActivo = getUsuarioActivo('juan');
const usuarioActivo2 = getUsuarioActivo2('lucas');
console.log( usuarioActivo );
console.log( usuarioActivo2 );


