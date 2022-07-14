import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("teste de 06-deses-obj", () => {
  test("devolver un objetos dedes", () => {
    // props
    const clave = "mayor";
    const edad = 22;
   
    const getContext = usContext({ clave, edad, });

    const testContext = {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 123.344,
        lng: -123.421,
      },
    };

    expect( getContext ).toEqual( testContext );
    
  });
});
