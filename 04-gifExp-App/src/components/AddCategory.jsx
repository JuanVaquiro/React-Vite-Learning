import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    /*   destructuracion de objetos
            ({ target: { value } }) => setInputValue(value);
        *   dentro del evento hay una props target.value
            para cambiar el nuevo valor del input
        *   console.log( event.target.value )  
        */
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSumbit = (event) => {
    // console.log(event)
    event.preventDefault(); // preventDefault, previene el comportamiento del refresh de la página
    // console.log(inputValue)

    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 2) return; // prueba para no recibie elementos vacios

    // onSetCategory( ( AddCategory ) => [ inputValue, ...AddCategory ])

    onNewCategory(newInputValue);
    setInputValue("");
  };

  // el evento que es es un argumento que se lo paso a una Funcion
  // (event) => onSumbit( event )

  return (
    <div className="cotainer-input">
      <form onSubmit={onSumbit}>
        <input
          className="input-searchGif"
          type="text"
          placeholder="Buscar gifs..."
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default AddCategory;
