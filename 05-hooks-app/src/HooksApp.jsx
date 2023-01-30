import CounterApp from "./01-useState/CounterApp";
import CounterCustom from "./01-useState/CounterCustom";
import CustomFormHook from "./02-useEffect/CustomForm";
import SimpleForn from "./02-useEffect/SimpleForn";
import MultCustomHook from "./03-example/MultCustomHook";
import { FocusScreen } from "./04-useRef/FocusScreen";
import Layaout from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre";

const HooksApp = () => {
  return (
    <div>
      {" "}
      HooksApp
     {/*  <CounterApp />
      <CounterCustom />
      <SimpleForn />
      <CustomFormHook /> 
      <MultCustomHook />
      <FocusScreen />
      <Layaout />
      <Memorize />
      <MemoHook />
      <CallbackHook />
    */}
    <Padre />
    </div>
  );
};

export default HooksApp;
