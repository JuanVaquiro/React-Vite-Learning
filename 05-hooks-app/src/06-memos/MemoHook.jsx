import { useMemo, useState } from "react"
import { useCounter } from "../hooks"

const heavyStuff = (inter = 100) => {
  for (let i = 0; i < inter; i++) {
    console.log('procesando...');
  }
  return `${inter} interaciones relaciadas`
}

export const MemoHook = () => {
  const { counter, increment } = useCounter(50)
  const [show, setShow] = useState(false)
  // useMemo: memorizar el resultado(valor) para cuando se renderize 
  // el compoennte NO VUELVA A RE-PROCESAR una funcion(resultado)
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div>
      <h1>Counter: <small>{counter}</small>
      </h1>

      <h4> {memorizedValue} </h4>

      <button
        onClick={() => increment()}
      >
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
      >
        Show: {JSON.stringify(show)}
      </button>
    </div>
  )
}
