import { render, screen } from "@testing-library/react";
import GitItem from "../../src/components/GitItem";

describe('test en el compoenntes <GitItem />', () => {

    const title = "Gifs";
    const url = 'https://gifs.com/gif.png'

    test('debe de hacer match con el snapshot', () => {
        
        const { container } = render(<GitItem  title={ title } url={ url } />)
        
        expect( container ).toMatchSnapshot()
    
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render(<GitItem  title={ title } url={ url } />);
        // expect( screen.getByRole('img').src ).toBe( url )

        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('debe de mostrar el titulo en el componente', () => {
        
        render(<GitItem  title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();
    });

});