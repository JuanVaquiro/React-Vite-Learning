import React from "react";
import CounterApp from "./01-useState/CounterApp";
import CounterCustom from "./01-useState/CounterCustom";
import CustomFormHook from "./02-useEffect/CustomForm";
import SimpleForn from "./02-useEffect/SimpleForn";
import MultCustomHook from "./03-example/MultCustomHook";

const HooksApp = () => {
  return (
    <div>
      {" "}
      HooksApp
     {/*  <CounterApp />
      <CounterCustom />
      <SimpleForn />
      <CustomFormHook /> 
    */}
    <MultCustomHook />
    </div>
  );
};

export default HooksApp;
