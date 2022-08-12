import getGif from "./ApiGetGifs";

const getApiCat = async () => {
        const URL = `https://catfact.ninja/fact`;
        const resp =  await fetch(URL);
        const { fact } = await resp.json();
        console.log(fact);
        // setcatFact(fact);
        let message = fact.split(' ', 3).join(' ');
        console.log(message, 'Message');
        getGif(message)
        return fact
}

export default getApiCat