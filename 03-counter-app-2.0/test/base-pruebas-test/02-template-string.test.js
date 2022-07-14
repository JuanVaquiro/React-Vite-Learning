import getSaludo from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-tempalte-string', () => {
    test('getSalido debe retornar "hola juan"', () => {
        
        const name = 'juan'
        const message = getSaludo( name ) 

        expect( message ).toBe( `hola ${ name }` );
    });
}); 