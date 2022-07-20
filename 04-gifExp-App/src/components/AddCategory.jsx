import { useState } from "react"

function formatName({ firstName, lastName }) {
    return firstName + ' ' + lastName;
  }
  
  const user = {
    firstName: 'David',
    lastName: 'Vaquiro'
  };


const AddCategory = ( { onSetCategory } ) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = ({ target }) => { 
        /*   destructuracion de objetos
            ({ target: { value } }) => setInputValue(value);
        *   dentro del evento hay una props target.value
            para cambiar el nuevo valor del input
        *   console.log( event.target.value )  
        */
        console.log( target.value )
        setInputValue( target.value )
    }

    const onSumbit = ( event ) => { 
        // console.log(event)
        event.preventDefault() // preventDefault, previene el comportamiento del refresh de la página
        // console.log(inputValue)

        if ( inputValue.trim().length < 1 ) return // prueba para no recibie elementos vacios
         
        onSetCategory( ( AddCategory ) => [ inputValue, ...AddCategory ])
        setInputValue('')
        
     }

    // el evento que es es un argumento que se lo paso a una Funcion 
    // (event) => onSumbit( event ) 

  return (
    <div className="cotainer-input">
      <form onSubmit={ onSumbit }>
        <input
          className="input-searchGif"
          type="text"
          placeholder="Buscar gifs..."
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      <h1>Hello, {formatName(user)}!</h1>
    </div>
  );
}

export default AddCategory