import getImagen from "../../src/base-pruebas/11-async-await";

describe('Teste en el file 11-asyc', () => {
    
    test('getImagen debe de retornar URL de la imagen', async () => {
        
        const url = await getImagen()
        expect( typeof url ).toBe( 'string' );
    });

});