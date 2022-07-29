import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () =>
{
    const title = 'Hola, Soy Goku';
    const subTitle = 'Soy un subtitulo';

    

    test('debe de mostrar el mensaje "Hola, Soy Goku"', () => 
    {
        render( <FirstApp title={title} /> );
        expect( screen.getByText(title) ).toBeTruthy();
        //screen.debug();
    })

    test('debe de mostrar el título en el h1', () =>
    {
        render( <FirstApp title={title} />);
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () =>
    {
        render( <FirstApp title={title} subTitle = { subTitle } />);
        expect(screen.getAllByAltText(subTitle).length).toBe(2);
    });

});