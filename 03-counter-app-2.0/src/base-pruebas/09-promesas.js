import { getHeroueById } from "./08-imp-exp";


const getHeroeByIdAsyc = ( id ) => {

    return new Promise ( ( resolve, reject )  => {

        setTimeout(() => {
            
            const p1 = getHeroueById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject(` No se pudo encontra el heroe con el ID: ${id}`)
            }

        }, 1000);

    })

}

export default getHeroeByIdAsyc