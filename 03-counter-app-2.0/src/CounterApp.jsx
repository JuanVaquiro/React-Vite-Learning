import PropTypes from 'prop-types'
import { useState } from 'react'



const CounterApp = ({ value }) => {
  const [counter, setCount] = useState(value);

  const Incremet = () => {
    // setCount( counter +1 )
    setCount((c) => c + 1);
  };
  
  const Decrement = () => setCount((c) => c - 1);

  const Reset = () => setCount(value);

  return (
    <div className="container">
      <h1>CounterApp</h1>
      <h2 data-testid='counter' >{counter}</h2>
      <div>
        <button onClick={Incremet}>+1</button>
        <button onClick={Decrement}>-1</button>
        <button aria-label='btn-reset' onClick={Reset}>Reset</button>
      </div>
    </div>
  );
};

CounterApp.propTypes = {    
    value: PropTypes.number.isRequired,
}

export default CounterApp 