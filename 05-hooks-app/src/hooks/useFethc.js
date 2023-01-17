import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [state, setstate] = useState({
    ressult: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setstate({
      ...state,
      isLoading: true,
    });
    const resp = await fetch(url);
    const   results  = await resp.json();
    console.log(results);
    setstate({
      results,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    results: state.results,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFetch;
