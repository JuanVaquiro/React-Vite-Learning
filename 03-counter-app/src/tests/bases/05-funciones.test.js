import { getUser, getUsuarioActivo } from "../../bases/05-funciones";

describe('Pruebas en 05-fucniones', () => {
  
  test('getUser debe de retorna un objeto', () => {
     
    const userTest = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    const user = getUser();

    expect( user ).toEqual( userTest );

  });

  test('getUsuarioActivo debe de retorna un objeto', () => {

    const nombre = 'Angelica';
    const user = getUsuarioActivo( nombre );

    const userTest ={
        uid: 'ABC567',
        username: nombre
    }

    expect( user ).toEqual( userTest );
    
  });
  
  
});
 