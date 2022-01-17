// Funcional Component 
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// imr

const PrimeraApp = ( { saludo } ) => {

  return (
    <Fragment>
      <h1>{ saludo }</h1>
      <p> mi priemra APP</p>
    </Fragment>
  );
};

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default PrimeraApp;  
