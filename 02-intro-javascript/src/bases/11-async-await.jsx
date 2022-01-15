const getImange = async () => {

    try{
        
        const apiKey = 'UWq2H92uOZoNgd5sj1D011B5dHLW1xoS';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey } `);
        const { data } = await respuesta.json();
         
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;  
        document.body.append( img );

    } catch(error){
         // manejo del erro
         console.error(error);
    }

}

getImange().then( console.log )
