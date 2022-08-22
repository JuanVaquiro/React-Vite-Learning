import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe('Pruebas componente <AddCategory />', () => {
    
    test('debe de cambiar el valor del inputValue', () => {
    
        render( <AddCategory onNewCategory={ () => {  } } /> );
    
        const getInput = screen.getByRole('textbox');

        fireEvent.input( getInput, { target: { value: 'gif' } }); // Lanzar un evento
        
        expect( getInput.value ).toBe( 'gif' );
        screen.debug();

    });
});
