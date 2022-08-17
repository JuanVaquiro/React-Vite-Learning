import { useEffect, useState } from "react";
// import getApiCat from "./ApiCat";
// import getGif from "./ApiGetGifs";

const App = () => {

    const [catFact, setcatFact] = useState('')
    const [gifImg, setGifImg] = useState([])

    const URL = `https://catfact.ninja/fact`;
    const API_KEY = 'UWq2H92uOZoNgd5sj1D011B5dHLW1xoS'

    // const getData = async () => {
    //     const messageCat = await getApiCat()
    //     const gif = await getGif()
    //     setcatFact(messageCat)
    //     console.log(messageCat, 'TEXT');
    //     setGifImg(gif)
    //     console.log(gif)
    // }
    
    const getApiCat = async () => {
        const resp =  await fetch(URL);
        const { fact } = await resp.json();
        setcatFact(fact);
        let message = fact.split(' ', 3).join(' ');
        console.log(message);
        getGif(message)
        // return fact
    }

    const getGif = async (message) => {
        const urlGif = `https://api.giphy.com/v1/gifs/search?api_key=${ API_KEY }&q=${ message }&limit=1`
        const resp = await fetch(urlGif)
        // caonsole.log(resp)
        const { data } = await resp.json()
        const gifs = data.map( img =>({
            title: img.title,
            url: img.images.original.url
        }))

        console.log('ret', gifs);
        setGifImg(gifs)
    }

      
    useEffect(() => {
        getApiCat()
        getGif()
    },[])

    return(
        <div>
            <div className="container" >
            {   
                gifImg.map( gif => (
                  <img className="gifImg" src={gif.url} alt={gif.title} />
                ))
            }
            <h2>{catFact}</h2>
            </div>
            <button className="btn" onClick={getApiCat}>
                Get Fact
            </button>
        </div>
    )
}

export default App