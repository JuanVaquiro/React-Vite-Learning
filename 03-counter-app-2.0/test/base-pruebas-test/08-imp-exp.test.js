import { getHeroueById, getHeroueByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

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

        //toBeFalsy metodo de evaluar si si un variables es null, undefined, false
        expect( getHeroe ).toBeFalsy();
    });

    test('getHerouesByOwner debe de retonar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC'
        const getOwner = getHeroueByOwner( owner )
        console.log('getOwner', getOwner)

        expect( getOwner.length ).toBe( 3 );
        console.log('tamano del array: ',getOwner.length)

        expect( getOwner ).toEqual(
            heroes.filter( (heroe) => heroe.owner === owner )
        ); 
            
    });

    test('getHerouesByOwner debe de retonar un arreglo con los heroes de MARVEL', () => {
        
        const owner = 'Marvel'
        const getOwner = getHeroueByOwner( owner )
    
        expect( getOwner.length ).toBe( 2 );
        console.log('tamano del array: ',getOwner.length)

        expect( getOwner ).toEqual(
            heroes.filter( (heroe) => heroe.owner === owner )
        ); 

        console.log( getOwner )

    });

});