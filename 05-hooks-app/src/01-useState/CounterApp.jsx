import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState({
    Number1: 10,
    Number2: 20,
    Number3: 30,
  });

  const { Number1, Number2, Number3 } = counter;

  const fntCounter = () => {
    setCounter({
      ...counter,
      Number1: Number1 + 1,
    });
  };

  return (
    <div>
      <h1>Counter: {Number1}</h1>
      <h1>Counter: {Number2}</h1>
      <h1>Counter: {Number3}</h1>
      <hr />
      <button onClick={fntCounter}> +1 </button>
    </div>
  );
};

export default CounterApp;
