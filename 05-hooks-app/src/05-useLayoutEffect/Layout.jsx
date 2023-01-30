import { useCounter, useFetch } from '../hooks'
import { LoadingQoute, Character } from '../03-example/components'

const Layaout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { results, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  const handleClik = () => {
    increment(1);
  };

  const handleClikDow = () => {
    decrement(1);
  };

  const data = results
  // console.log(data);

  return (
    <div className="main-container">
      <h1>Ricky and Morty</h1>
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

export default Layaout;
