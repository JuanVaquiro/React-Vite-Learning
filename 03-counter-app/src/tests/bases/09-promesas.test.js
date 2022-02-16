import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesa', () => {
  
    test('getHeroeByIdAsync debe retornar un Heroe aysnc', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
        .then( heroe => {
            expect( heroe ).toBe( heroes[0] );
            done();
        });

    });

    test('obtener un erro si el heroe por id no existe', () => {
        
        const id = 10;
        getHeroeByIdAsync( id )
        .catch( error =>{
            
            expect( error ).toBe('No se pudo encontrar el héroe');
            
        });

    }); 
    
    

});
