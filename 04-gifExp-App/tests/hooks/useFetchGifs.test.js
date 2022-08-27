import { renderHook, waitFor } from "@testing-library/react";
import useFetchGifs from "../../src/hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        
        const { result } = renderHook(() => useFetchGifs('gif anime'))

        const { images, isLoanding } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoanding ).toBeTruthy();

    });

    test('debe de retornar un arrelgo de imagenes y isloanding en flase', async () => {
        
        const { result } = renderHook(() => useFetchGifs('gif anime'))

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )  
        
        const { images, isLoanding } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoanding ).toBeFalsy();
    
    });


}); 