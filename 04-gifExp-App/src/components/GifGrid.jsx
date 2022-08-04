import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"


const GifGrid = ({ category }) => {

  const [images, setimages] = useState([])

  const getImages = async() => {
    const newImages = await getGifs( category )
    setimages(newImages)
  }

  useEffect(() => {
    getImages( category )
  }, [])
  
  return (
    <div>
        <h2>{ category }</h2>
        <ol>
          {
            images.map( ({ id, title, url }) => (
              <li key={ id }> { title }
                <img src={url}></img>
              </li>
            ))
          }
        </ol>
    </div>
  )
}

export default GifGrid