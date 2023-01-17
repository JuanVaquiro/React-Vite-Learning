import useFetch from "../hooks/useFethc";

const MultCustomHook = () => {
  const { results, isLoading, hasError } = useFetch(
    "https://rickandmortyapi.com/api/character/2"
  );

  console.log({ results, isLoading, hasError });

  /* 
    if (isLoading) {
        return(
            <h2>Cargando ...</h2>
        )
    } */

  return (
    <div>
      <h2>Ricky and Morty</h2>
      { 
        isLoading 
        ? (
            <div>Cargando...</div>
        ) 
        : (
            <blockquote>
            <p>Customs hooks</p>
            <footer>Juan Vaquiro</footer>
            </blockquote>
        )
      }
    </div>
  );
};

export default MultCustomHook;
