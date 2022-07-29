import { CounterApp } from "../CounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Pruebas en <CounterApp />', () =>
{

    const initValue = 10;

    test('debe de hacer match con el snapshot', () =>
    {
        const {container} = render( <CounterApp value={ initValue } /> );

        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar el valor inicial de 100', () =>
    {
        render( <CounterApp value={100} /> );

        expect(screen.getByText('100')).toBeTruthy();
        //expect(screen.getByRole('heading', { level: 2}).innerHTML).toContain('100');
    });

    test('debe de incrementar con el botón +1', () =>
    {
        render( <CounterApp value={ initValue } /> );

        fireEvent.click( screen.getByText("+1") );

        expect(screen.getByText('11')).toBeTruthy();

    });

    test('debe de decrementar con el botón -1', () =>
    {
        render( <CounterApp value={ initValue } /> );

        fireEvent.click( screen.getByText("-1") );

        expect(screen.getByText('9')).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () =>
    {
        render( <CounterApp value={ initValue } /> );


        fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));

    });



});