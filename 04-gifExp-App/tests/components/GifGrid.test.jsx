import { render, screen } from "@testing-library/react";
import GifGrid from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Prubas en <GifGrid />', () => {
    
    const category = 'gif anime'

    test('debe de mostrar el loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoanding: true    
        });

        render( <GifGrid category={category} /> )
        expect( screen.getByText( 'Cargando...' ))
        expect( screen.getByText( category ))
    });

    // hacer un mock completo de un custom hook
    test('debe de mostrar items cuando se carga las imagenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: 'doom',
                title: 'giftitle',
                url: 'https/asdadad.com'
            },
            {
                id: 'biff',
                title: 'giftitle2',
                url: 'https/jkljkl;.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoanding: false
        });

        render( <GifGrid category={category} />)
        expect( screen.getAllByRole('img').length ).toBe(2)
        screen.debug()
    });

})