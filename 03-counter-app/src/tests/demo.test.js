describe('Pruebas en el archivo demo.test.js', () => {
    
    test('deben de ser iguales los string ', () => {
        
       // 1. inicialización
        const mensaje = 'hola mundo';
    
        // 2.estimulo
        const mensaje2 = `hola mundo`;
    
        // 3.observar el compratmiento 
        expect( mensaje ).toBe( mensaje2 ); // == 
    });

})




