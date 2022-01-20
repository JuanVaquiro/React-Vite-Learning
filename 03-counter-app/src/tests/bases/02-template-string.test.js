import '@testing-library/jest-dom'

import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas en 02-teample-string', () => {
    
    test('getSaludo retorna juan ', () => {
        
        const nombre = 'juan';

        const saludo = getSaludo( nombre );

          expect( saludo ).toBe( 'Hola ' + nombre );
    });
    


})
