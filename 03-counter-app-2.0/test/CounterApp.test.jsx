import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('testing el componente <CoumterApp />', () => {
    
    const value = 0

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <CounterApp value={value} />)
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor incial de 100 ', () => {
        
        render ( <CounterApp value={value} />);

        // getByText() busca en el screen, esperando recvibir '0' el valor de 'value'
        expect( screen.getByText( 0 ) ).toBeTruthy();

        // getByRole() metodo que busca segun el rol de la etiqueta del DOM
        expect( screen.getByRole("heading",{ level: 2 }).innerHTML ).toContain('0');
    });

    test('debe de incrementar el boton +1', () => {
        
        render ( <CounterApp value={value} />);

        const getValue = screen.getByText( '+1' )
       
        fireEvent.click( getValue );
        expect( screen.getByText( '1' ) ).toBeTruthy();

    });

    test('debe de decrementar el boton -1', () => {
        
        render ( <CounterApp value={value} />);

        const getValue = screen.getByText( '-1' )

        
        fireEvent.click( getValue );
        expect( screen.getByTestId( 'counter' ).innerHTML ).toContain('-1');
        // estado del DOM
        screen.debug()
    });

    test('debe de funcionar el boton reset', () => {
        
        render( <CounterApp value={ value } /> );
        fireEvent.click( screen.getByText( '+1' ));
        fireEvent.click( screen.getByText( '+1' ));
        fireEvent.click( screen.getByText( '+1' ));
        fireEvent.click( screen.getByText( '-1' ));
        
        // Simular un evneto con fireEvente() evento: clikc(element, nodo, Document)
        fireEvent.click( screen.getByRole("button",{ name:'btn-reset' }) );
        
        expect(  screen.getByText( value ) ).toBeTruthy();
        
    });

});  