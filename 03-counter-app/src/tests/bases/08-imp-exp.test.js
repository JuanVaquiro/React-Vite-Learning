import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones Heroes', () => {
  
    test('debe de retonar Heroe por ID', () => {
    
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );

    });
    
    test('debe retornar un undefined si Heroe  no existe', () => {
      
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
        
    });

    test('debe de retora un arreglo con los Heroe de DC', () => {
      
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );

        const heroesData = heroes.filter(h => h.owner === owner); 
            
        expect( heroe ).toEqual( heroesData );

        console.log(heroe);
        console.log(heroesData);

    });

    test('debe de retora un arreglo con los Heroe de MARVEL', () => {
      
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );

        expect( heroe.length ).toBe( 2 );

        // console.log( heroe.length );
        // console.log(heroe);
    
    });
        
});
