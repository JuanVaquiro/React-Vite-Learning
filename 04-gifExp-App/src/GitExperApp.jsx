import { useState } from 'react'
import AddCategory from './components/AddCategory'


// UWq2H92uOZoNgd5sj1D011B5dHLW1xoS KEY APP GIF

const GitExpertApp = () => {
  const [categories, setCategories] = useState(['Naruto', 'One Piece'])
  
  const onAddCategory = () => { 
    // seCategories( ([ ...categories, 'Pokemon' ]) );
    setCategories( addCat => [ 'Pokemon', ...addCat ] )
   } 

  return (
    <div className="App">
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory onSetCategory={ setCategories } /> 

      {/*  filtro listado de Gif */}
    
      <ol>
        {categories.map((categories) => {
          return <li key={categories}> {categories}</li>;
        })}
      </ol>
    </div>
  );
}

export default GitExpertApp
