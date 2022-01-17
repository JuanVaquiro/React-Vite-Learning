// Funcional Component 
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// imr

const PrimeraApp = ( { saludo, subtitulo } ) => {

  return (
    <Fragment>  
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
