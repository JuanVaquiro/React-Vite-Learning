import PropTypes from "prop-types";
import useFetchGifs from "../hooks/useFetchGifs";
import GitItem from "./GitItem";

const GifGrid = ({ category }) => {
  const { images, isLoanding } = useFetchGifs(category);
  console.log({ images, isLoanding });

  return (
    <div>
      <h2>{category}</h2>
      {isLoanding && <h2>Cargando...</h2>}
      <div className="card-gird">
        {images.map((img) => (
          <GitItem
            key={img.id}
            // title={title}
            // url={url}
            {...img} //esparciendo todos los props al fntComponent
          />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
