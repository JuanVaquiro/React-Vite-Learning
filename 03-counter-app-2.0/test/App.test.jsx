import { render } from "@testing-library/react";
import App from "../src/App";

describe('Pruebas en el comp <App/>', () => {
    
    test('debe de hacer match con el snapshot', () => {
        
        const title = 'Hola, soy David'
        render( <App title={ title } /> )
        z
    });
});