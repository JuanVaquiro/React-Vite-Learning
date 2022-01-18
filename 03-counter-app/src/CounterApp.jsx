import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types'

// [rafce} para hacer el esqueleo 

const CounterApp = ( { value = 3 } ) => {

    // hook funcion useState q retorna una arreglo con dos valores
    const [ counter, setCounter ] = useState( value );


    //HandAdd
    const handleAdd = () => {
        // return () => console.log('hola mundo');
        // setCounter( counter + 1 );
        setCounter( (c) => c + 1)
    };
    
    const handleMeno = () => {
        setCounter( (c) => c - 1)
    };

    const defValue = () => {
         setCounter(value)                                                                                                                                                                                                                                                             
    };
    
    
    return (    
        <Fragment>  
            <h1>CounterApp</h1>
            <h2> { counter }</h2>                           
            <button onClick={  handleAdd } >+1</button>
            <button onClick={ defValue }>Reset</button>                                                                                
            <button onClick={ handleMeno }>-1</button>
            {/* <button onClick={ (e) => { handleAdd(e) } }>+1</button> */}
        </Fragment>
      );
};

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterApp;