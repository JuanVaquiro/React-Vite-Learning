import React from "react";
import useCounter from "../hooks/useCounter";

const CounterCustom = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>Counter With hook: {counter} </h1>
      <hr />
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => increment(1)}> +1 </button>
        <button onClick={() => decrement(1)}> -1 </button>
        <button onClick={reset}> Reset </button>
      </div>
    </div>
  );
};

export default CounterCustom;
