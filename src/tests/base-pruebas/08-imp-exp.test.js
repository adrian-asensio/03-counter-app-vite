import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', ()=>{
    test('getHoeroeById debe de retornar un heroe por id', () =>
    {
        const id = 1;
        const hero = getHeroeById( id );
        console.log(hero);

        expect(hero).toEqual({ id:1, name: 'Batman', owner: 'DC'})

    });

    test('getHoeroeById debe de retornar undefined si no existe el id', () =>
    {
        const id = 100;
        const hero = getHeroeById( id );
        console.log(hero);

        expect( hero ).toBeFalsy();

    });

    test('getHeroeByOwner debe de regresar heroes de DC', () =>
    {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect(heroes).toEqual(heroes.filter( h => h.owner == owner));

        expect(heroes).toHaveLength(3);
    });

    test('getHeroeByOwner debe de regresar heroes de Marvel', () =>
    {
        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);

        expect(heroes).toEqual(heroes.filter( h => h.owner == owner));

        expect(heroes).toHaveLength(2);
    });
    
});