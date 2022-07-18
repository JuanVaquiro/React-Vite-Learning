import { render } from "@testing-library/react";
import App from "../src/App";

describe('Pruebas en el componente <App/>', () => {

    // hacer la captura del compentne en con este listo 
    
 /*    test('debe de hacer match con el snapshot', () => {
        
        const title = 'Hola, soy David'
        const { container }  = render( <App title={ title } /> )
        expect( container ).toMatchSnapshot();
    }); 
 */

    test('debe de mostrar el titulo en un h1', () => {
        
        const title = 'Hola, soy Goku'
        const { container, getByText, getByTestId } = render( <App title={title} /> )

        // toBeTruthy evalua si existe el contenido en HTMLElemente
        expect( getByText(title) ).toBeTruthy();
        
        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain( title )
   
        // Evaluar un elemento especifico con getByTestId
        expect( getByTestId('test-title').innerHTML ).toContain(title);
        
    });

    test('debe de mostrar el subtitulo enviado por props', () => {  
        
        const title = 'Hola, soy Goku';
        const subTitulo = 'este es el subtitulo';
        const { getByText, getAllByText } = render( 
            <App 
                title={title} 
                subTitle={subTitulo}
            /> )

        // expect( getByText(subTitulo) ).toBeTruthy();
        
        // Recibir mas de uno elemento, contair, html
        // getAllByText devuleve un arrays de HTMLElemnts
        expect( getAllByText(subTitulo).length).toBe(2);
    
    });

    // acordar que el innerHTML TRANFORMA el conenido de un hmtlElement a string
    // por lo que no se pude evaluar un hmtlElement que devolviera un number

});