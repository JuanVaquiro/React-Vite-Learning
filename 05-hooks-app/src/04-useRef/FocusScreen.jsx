import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef()

  const onClickRef = () => {
    console.log(inputRef)
    inputRef.current.select()
  }

  return (
    <div>
        <h1>Focus Screen</h1>
        {" "}
        <input 
        ref={ inputRef }
        type="text" 
        name="" 
        id="" 
        placeholder='ingrese con'
        />

        <button onClick={onClickRef}>
          set Focus
        </button>
    </div>
  )
}
