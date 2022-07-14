import { getUser, getUserActivo } from '../../src/base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {
    
    test('get debe de retornar un objecto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'EL_Padrino'
        };

        const user = getUser()

        expect( testUser ).toEqual( user );

    });

    test('getUserActivo debe de retornar un objecto', () => {
        
        const name = 'juan';
        
        const userActivo = getUserActivo(  name  )
        
        const testUserActivo = {
            uid: 'ADC456',
            username: name
        };

        expect( userActivo ).toEqual( testUserActivo  );
    });

});