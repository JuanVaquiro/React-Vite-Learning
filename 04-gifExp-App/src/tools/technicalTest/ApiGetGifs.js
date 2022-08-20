const API_KEY = "UWq2H92uOZoNgd5sj1D011B5dHLW1xoS";

const getGif = async (message) => {
  const urlGif = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${message}&limit=1`;
  const resp = await fetch(urlGif);
  const { data } = await resp.json();
  console.log(data);
  const gifs = data.map((img) => ({
    title: img.title,
    url: img.images.original.url
  }));

  console.log("ret", gifs);
  return gifs;
};

export default getGif;
