import { useState } from 'react'
import { AddCategory, GifGrid  } from './components'

const GitExpertApp = () => {
  const [categories, setCategories] = useState(['gif'])
  
  const onAddCategory = (capCategory) => {
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
