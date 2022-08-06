import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = ( category ) => {
    
  const [images, setimages] = useState([]);
  const [isLoanding, setisLoanding] = useState( true )

  const getImages = async () => {
    const newImages = await getGifs( category );
    setimages( newImages );
    setisLoanding( false )
  };

  useEffect(() => {
    getImages();
  });

  return {
    images,
    isLoanding
  }
}

export default useFetchGifs