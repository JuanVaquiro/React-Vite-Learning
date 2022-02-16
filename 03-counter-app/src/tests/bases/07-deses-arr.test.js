import { retornaArreglo } from "../../bases/07-deses-arr";

describe('Pruebas en desestruturacion', () => {
  
    test('Debe de retorna un string y un numero', () => {
        
    //  const arr = retornaArreglo() //['ABC', 123]

    //  expect(arr).toEqual( ['ABC', 123] );

    const [ letras, numeros] = retornaArreglo();
    
    expect( letras ).toBe( 'ABC' );
    expect( typeof letras ).toBe( 'string' );

    expect( numeros ).toBe( 123 );
    expect( typeof numeros ).toBe( 'number' );

    });
    

});
