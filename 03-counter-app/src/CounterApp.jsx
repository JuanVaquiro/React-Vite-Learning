import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

// [rafce} para hacer el esqueleo 

const CounterApp = ( { value } ) => {

    //HandAdd
    const handleAdd = () => {
        return () => console.log('hola mundo');
    };
    

    return (
        <Fragment>  
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={  handleAdd() } >+1</button>
            {/* <button onClick={ (e) => { handleAdd(e) } }>+1</button> */}
        </Fragment>
      );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;