import { getHeroueById, getHeroueByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Test en el file 0-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por ID', () => {
        
        const id = 1
        const getHeroe = getHeroueById( id )

        console.log(getHeroe)

        const testHeroe = {
            id: 1,
            name: "Batman",
            owner: "DC",
          }

        expect( getHeroe ).toEqual( testHeroe );

    });

    test('getHeroueById debe de retonar undefined si no existe', () => {
        
        const id = 101
        const getHeroe = getHeroueById( id )

        expect( getHeroe).toBeFalsy();
    });

    test('getHerouesByOwner debe de retonar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC'
        const getOwner = getHeroueByOwner( owner )
        console.log('getOwner', getOwner)


        // expect( getOwner ).toEqual( testOwner ); 
            
    });

});