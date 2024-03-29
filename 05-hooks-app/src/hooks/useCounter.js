import { useState } from "react";

export const useCounter = (initValue = 1) => {
  const [counter, setCounter] = useState(initValue);

  const increment = ( value = 1 ) => {
    setCounter(counter + value);
  };

  const decrement = (  value = 1  ) => {
    if (counter === 1) return
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter(initValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
