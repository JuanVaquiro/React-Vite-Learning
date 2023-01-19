import { useState } from 'react'

function FilterName({ onNewValue }) {
    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({ target }) => {
        setInputValue(target.value)    
    }

    const onSumbit = ( event ) => { 
        event.preventDefault()
     }

  return (
    <form onSubmit={onSumbit}>
        <input 
        type="text"
        className="a"
        placeholder="Busca por nombre"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>

  )
}

export default FilterName