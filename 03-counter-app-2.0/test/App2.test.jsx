import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe('Pruebas en <App2 />', () => {

    // Mejorar el codigo de testing en el componente <App />

    const title = 'Hola, soy Juan'
    const subTitle = 'el subtitulo'

    test('debe de hacer match con el Snapshot ', () => {

        const { container } = render( <App title={ title } /> )
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar le mensaje: "Hola, soy Juan"', () => {
        
        render( <App title={ title } /> )

        // "screen" el objeto que se renderiza
        // screen.debug() : renderiza el DOM del compenete y ver el objeto
        expect( screen.getByText( title ) ).toBeTruthy();

    });

    test('debe de mostrar el titulo en un <h1>', () => {
        
        render( <App title={ title } /> )

        expect( screen.getByRole("heading", { level: 1 }).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        render( 
            <App 
                title={ title }
                subTitle={ subTitle } 
            /> 
        )

        expect( screen.getAllByText(subTitle).length ).toBe(2);
    });
    
});