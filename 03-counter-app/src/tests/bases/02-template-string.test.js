import '@testing-library/jest-dom'

import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas en 02-teample-string', () => {
    
    test('geSaludo retorna juan ', () => {
        
        const nombre = 'juan';

        const saludo = getSaludo( nombre );

          expect( saludo ).toBe( 'hola' + nombre );
    });
    


})
