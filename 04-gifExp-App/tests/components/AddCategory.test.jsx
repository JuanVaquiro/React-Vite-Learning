import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe('Pruebas componente <AddCategory />', () => {
    
    test('debe de cambiar el valor del inputValue', () => {
    
        render( <AddCategory onNewCategory={ () => {  } } /> );
    
        const getInput = screen.getByRole('textbox');

        fireEvent.input( getInput, { target: { value: 'gif' } }); // Lanzar un evento
        
        expect( getInput.value ).toBe( 'gif' );
        // screen.debug();

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'One Piece';
        const onNewCategory = jest.fn() // Una funcion simulada

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue } }); // Lanzar un evento: establecer valor
        fireEvent.submit( form )
        
        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // evalua si la fn se esta llamando con el valor espereado por la caja de texto 

    });

    test('no llamar a la fn onNewCategory si el input esta vacio', () => { 

        const onNewCategory = jest.fn() 
        
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const form = screen.getByRole('form')

        fireEvent.submit( form )
        expect( onNewCategory ).not.toHaveBeenCalled();
        screen.debug()
    });
});
