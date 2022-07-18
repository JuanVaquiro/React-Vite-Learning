import getSaludo from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-tempalte-string', () => {
    test('getSalido debe retornar "hola juan"', () => {
        
        const name = 'juan'
        const message = getSaludo( name ) 

        // toBe Se asegura que sea el elemento sea del mismo tipo, mismo contenido, identico
        expect( message ).toBe( `hola ${ name }` );
    });
}); 