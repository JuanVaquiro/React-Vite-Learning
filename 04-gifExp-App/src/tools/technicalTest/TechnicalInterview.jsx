import { useEffect, useState } from "react";
import getApiCat from "./ApiCat";
import getGif from "./ApiGetGifs";

const App = () => {

    const [catFact, setcatFact] = useState('')
    const [gifImg, setGifImg] = useState([])

    const getData = async () => {
        const messageCat = await getApiCat()
        const message = messageCat.split(' ', 3).join(' ');
        console.log(message);
        const gif = await getGif(message)
        setcatFact(messageCat)
        console.log(messageCat, 'TEXT');
        setGifImg(gif)
    }
          
    useEffect(() => {
        getData()
    },[])

    return(
        <div>
            <div className="container" >
            {   
                gifImg.map( gif => (
                  <img className="gifImg" key={gif.title} src={gif.url} alt={gif.title} />
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