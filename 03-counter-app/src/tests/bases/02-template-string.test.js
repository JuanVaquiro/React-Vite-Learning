import '@testing-library/jest-dom'

// 👇 instlacion y configuracion de react-testing-lebrery 👇
// https://pranshushah.tech/getting-started-with-react-using-vitejs

import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas en 02-teample-string', () => {
    
    test('getSaludo retorna hola juan ', () => {
        
        const nombre = 'juan';

        const saludo = getSaludo( nombre );

          expect( saludo ).toBe( 'Hola ' + nombre );
    });

    test('getSaludo debe retorna "Hola David" si no hay argumentos', () => {
        
        const saludo = getSaludo();
        expect(saludo).toBe( 'Hola David!' );
    });
    
    
})
