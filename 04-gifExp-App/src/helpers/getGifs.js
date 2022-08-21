// import fetch from 'cross-fetch';

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=UWq2H92uOZoNgd5sj1D011B5dHLW1xoS&q=${category}&limit=9`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  // console.log(data)

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  // console.log(gifs);
  return gifs;
};

export default getGifs;
