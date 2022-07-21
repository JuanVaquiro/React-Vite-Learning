import getGifs from "../helpers/getGifs"


const GifGrid = ({ category }) => {

    getGifs( category )

  return (
    <div>
        <h2>{ category }</h2>
    </div>
  )
}

export default GifGrid