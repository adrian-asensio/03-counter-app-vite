import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en <FirstApp />', () =>
{
    test('debe de hacer match con el snapshot', () =>
    {
        const title = 'Hola, Soy Goku';
        const {container } = render( <FirstApp title={ title } /> );

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el título en un h1', () =>
    {
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

        expect( getByText(title) ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML).toBe(title);

        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain( title);
    });

    test('debe de mostrar el subtitulo enviado por props', () =>
    {
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getByText } = render( <FirstApp title={ title } subTitle={subTitle} /> );

        expect( getByText(subTitle) ).toBeTruthy();


        //const h1 = container.querySelector('h1');
        //expect(h1.innerHTML).toContain( title);
    });

});