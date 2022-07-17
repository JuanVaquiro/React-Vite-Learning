
const getImagen = async() => {

    try {

        const apiKey = 'UWq2H92uOZoNgd5sj1D011B5dHLW1xoS';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        const { url } = data.images.original;

        return  url 

    } catch (error) {

        // manejo del error
        return 'No se encontro la imagen'

    }
}

export default getImagen 
