import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFethc";
import FilterName from "./filterName";

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

  const data = Object.values({ results });
  console.log(data);

  const onAddName = (capName) =>{
    const lowCaseName = capName.toLowerCase()
    if (data.includes(lowCaseName)) return {
      
    }
  }

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
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <blockquote>
          <div className="cart-character">
            <img src={data[0].image} alt="" />
            <span>name: {data[0].name}</span>
            <span>species: {data[0].species}</span>
            <span>status: {data[0].status}</span>
          </div>
        </blockquote>
      )}

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
