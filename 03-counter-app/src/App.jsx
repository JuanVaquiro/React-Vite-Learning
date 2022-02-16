// Funcional Component 
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// imr

const objeto = {
  nombre: 'david',
  edad: 32
}

const PrimeraApp = ( { saludo, subtitulo } ) => {

  return (
    <Fragment>  
      {/* 👇 imprimir un objeto 👇 */}
      <pre>{JSON.stringify( objeto, null, 3 ) }</pre>
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
    </Fragment>
  );
};  

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'MI primera App'
}

export default PrimeraApp;  
