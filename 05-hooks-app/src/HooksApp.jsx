import React from "react";
import CounterApp from "./01-useState/CounterApp";
import CounterCustom from "./01-useState/CounterCustom";
import SimpleForn from "./02-useEffect/SimpleForn";

const HooksApp = () => {
  return (
    <div>
      {" "}
      HooksApp
      <CounterApp />
      <CounterCustom />
      <SimpleForn />
    </div>
  );
};

export default HooksApp;
