import { retornarArreglo } from "../../src/base-pruebas/07-deses-arr";


describe('test de file 07-dedes.arr', () => {
    test('retornar un arreglo con un string y un numero', () => {
        
        const [ letters, numbers ] = retornarArreglo();
  
        // expect( letters ).toBe( 'ABC' );
        // expect( numbers ).toBe( 123 );

        // typeof evalua de que tipo es la variable
        // expect( typeof letters ).toBe('string');
        // expect( typeof numbers ).toBe('number');

        // expect.any() resive cualquir tipo de dato segun su tipo de constructor 
        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );

    });
});