import { useState } from "react";

const useCounter = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter === 0) return
    setCounter(counter - 1);
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

export default useCounter;
