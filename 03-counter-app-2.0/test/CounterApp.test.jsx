import { render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe('testing el componente <CoumterApp />', () => {
    
    const value = 0

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render( <CounterApp value={value} />)
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el valor incial de 100 ', () => {
        
        render ( <CounterApp value={value} />);

        //
        expect( screen.getByText( 0 ) ).toBeTruthy();

        //
        expect( screen.getByRole("heading",{ level: 2 }).innerHTML ).toContain('0');
    });
}); 