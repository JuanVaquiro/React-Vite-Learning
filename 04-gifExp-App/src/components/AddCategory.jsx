import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    /* destructuracion de objetos
      ({ target: { value } }) => setInputValue(value);
      dentro del evento hay una props target.value
      para cambiar el nuevo valor del input */
    console.log(target.value);
    setInputValue(target.value);
  };

  const onSumbit = (event) => {
    // console.log(event)
    event.preventDefault(); // preventDefault, previene el comportamiento del refresh de la página
    // console.log(inputValue)
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 2) return; // prueba para no recibie elementos vacios
    onNewCategory(newInputValue);
    setInputValue("");
  };

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

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;
