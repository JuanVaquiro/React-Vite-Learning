import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback(
    (argumento) => {
      setCounter((value) => value + argumento)
    },
    [],
  )

  return (
    <div>
      <h1>useCallBack hook: {counter} </h1>
      <ShowIncrement increment={incrementFather} />
    </div>
  )
}
