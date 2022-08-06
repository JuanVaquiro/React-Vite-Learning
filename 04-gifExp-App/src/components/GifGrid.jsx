import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import GitItem from "./GitItem";

const GifGrid = ({ category }) => {
  const [images, setimages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return (
    <div>
      <h2>{category}</h2>
      <div className="card-gird">
        {
          images.map(( img ) => (
            <GitItem  key={ img.id } 
              // title={title}
              // url={url}
              { ...img } //esparciendo todos los props al fntComponent
            />
          ))
        }
      </div>
    </div>
  );
};

export default GifGrid;
