import getHeroeByIdAsyc from "../../src/base-pruebas/09-promesas";

describe('Test in file 09-promesa', () => {
    

    test('getHeroeByIdAsyc debe de regresa un heroe pasado la promesa', ( done ) => {
        
        const id = 1;

        const testObject = {
            id: 1,
            name: "Batman",
            owner: "DC",
        }

        getHeroeByIdAsyc( id )

        .then( hero => {
            expect( hero ).toEqual( testObject );
            done()   
        })
    });

    
    test('getHeroeByIdAsyc debe de regresa un error si no encuentra el ID', ( done ) => {
        
        const id = 101;
        getHeroeByIdAsyc( id )

        //No esta demas, evaluar si el ID Existe. ESTO NO DEBIERA DE SUCEDER
        .then( hero => {
            expect( hero ).toBeFalsy()
            done()
        })
        .catch( error => {
            expect( error ).toBe( ` No se pudo encontra el heroe con el ID: ${ id }` );
            done()
        })
    });
});