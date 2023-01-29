import { useCounter, useFetch } from '../hooks'
import { LoadingQoute, Character } from './components'
import FilterName from "./filterName"

const MultCustomHook = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { results, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  // console.log({ results, isLoading, hasError });

  const handleClik = () => {
    increment(1);
  };

  const handleClikDow = () => {
    decrement(1);
  };

  const data = results
  console.log(data);

  // const data1 = Object.values({ results });
  // console.log( data1);

  const onAddName = (capName) => {
    const lowCaseName = capName.toLowerCase()
    if (data.includes(lowCaseName)) return {

    }
  }

  // si la data tiene un valor, entonces: toma la data en la posicion 0
  // const { name, image, species, status } = !!data && data[0]

  // const character = data.map(function (data) {
  //     return [data.name, data.image, data.species, data.status];
  //   })

  return (
    <div className="main-container">
      <h1>Ricky and Morty</h1>

      <FilterName
        onNewValue={onAddName}
      />
      {
        isLoading
          ? <LoadingQoute />
          : (
            <Character
              name={data.name}
              species={data.species}
              image={data.image}
              status={data.status}
            />
          )
      }
      <div>
        <button disabled={isLoading} onClick={handleClikDow}>
          preview character
        </button>
        {' '}
        <button disabled={isLoading} onClick={handleClik}>
          next character
        </button>
      </div>
    </div>
  );
};

export default MultCustomHook;
