const URL = `https://catfact.ninja/fact`;

const getApiCat = async () => {
        const resp =  await fetch(URL);
        const { fact } = await resp.json();
        console.log(fact);
        return fact
}

export default getApiCat