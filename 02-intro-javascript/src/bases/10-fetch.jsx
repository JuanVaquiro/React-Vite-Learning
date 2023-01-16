const apiKey = 'UWq2H92uOZoNgd5sj1D011B5dHLW1xoS';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey } `);

// peticion.then( respuesta  => {
//     // console.log( respuesta )
//     respuesta.json().then( data=> {
//         console.log(data);
//     })
// })
// .catch( console.warn);
 

// json(): es un metodo de la respuesta. retorna
// una promesa que devuele culquier cosa 

// promesa en cadena 
peticion
    .then( resp => resp.json() ) 
    .then( ({ data }) => {
        // console.log(data.images.original.url)
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;  
        document.body.append( img );
        // console.log( url )   ;
    }) 
    .catch( console.warn ) 