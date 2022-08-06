import { useState } from 'react'
import { AddCategory, GifGrid  } from './components'


// UWq2H92uOZoNgd5sj1D011B5dHLW1xoS KEY APP GIF

/* 
*  añadir la nueva categoría poniéndola al inicio de la lista 
*   y en caso de que ya existiera, elimina
*
*  categorías actuales: [ perro, gato, pez, lobo ]
*  categoría añadida: pez
*  categorías actualizadas: [ pez, perro, gato, lobo ]   
*    
*  setCategories([ newCategory, ...categories.filter( val => val !== newCategory ) ]); 
*/

const GitExpertApp = () => {
  const [categories, setCategories] = useState([])
  
  const onAddCategory = (capCategory) => {
    // seCategories( ([ ...categories, 'Pokemon' ]) );
    // setCategories( addCat => [ capCategory, ...addCat ] )
    const lowCaseCategory = capCategory.toLowerCase();
    if (categories.includes(lowCaseCategory)) return;
    setCategories([lowCaseCategory, ...categories]);
  }; 

  return (
    <div className="App">
      <h1>GitExpertApp</h1>

      <AddCategory
        onNewCategory={(event) => onAddCategory(event)}
        // onNewCategory = { onAddCategory }
      />

      {categories.map(( category ) => (
        <GifGrid key={ category } category={ category } />
      ))}
    </div>
  );
}

export default GitExpertApp
