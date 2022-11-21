

describe('Testando números', () => {

    // Igualdade
    // Caso queira a logica INVERSA das comparações utilize (.not) antes das comparações
    test('toBe - DEVE comprar a igualdade do resultado QUANDO comparado com valor', ()=> {
        expect(2+2)
            .toBe(4);
    });

    test('toEqual - DEVE comprarar a igualdade do resultado QUANDO comparado com valor', ()=> {
        expect(2+2)
            .toEqual(4);
    });

    test('toBeCloseTo - DEVE comparar a igualdade do resultado considerando ponto futuante QUANDO comparado com valor', ()=> {
        expect(0.1 + 0.2)
            .toBeCloseTo(0.3);
    });

    // Equivalencia

    test('toBeGreaterThan - DEVE comparar se o resultado é maior QUANDO comparado com valor', ()=> {
        expect(4)
            .toBeGreaterThan(3);
    });

    test('toBeGreaterThanOrEqual - DEVE comparar se o resultado é maior ou igual QUANDO comparado com valor', ()=> {
        expect(4)
            .toBeGreaterThanOrEqual(4);
    });

    test('toBeLessThan - DEVE comparar se o resultado é maior ou igual QUANDO comparado com valor', ()=> {
        expect(4)
            .toBeLessThan(5);
    });

    test('toBeLessThanOrEqual - DEVE comparar se o resultado é maior ou igual QUANDO comparado com valor', ()=> {
        expect(4)
            .toBeLessThanOrEqual(4.5);
    });

});

describe('Testando tipos', () => {
    
    test('toBeInstanceOf - DEVE ser uma função QUANDO testado', () => {
        expect(Function)
            .toBeInstanceOf(Function);
    });
    
});


describe('Testando comparações implicitas', () => {
    
    // false: 0, null, false, underfined
    
    // true: 1, 100, true, {}, NaN, etc....

    test('toBeTruthy - DEVE ser implicitamente verdadeiro QUANDO comparado', () => {
        expect(true)
            .toBeTruthy();
    });

    test('toBeFalsy - DEVE ser implicitamente falso QUANDO comparado', () => {
        expect(false)
            .toBeFalsy();
    });
});

describe('Testando valores definidos com qualquer valor, indefinidos, nulos, NaN', () => {

    test('toBeDefined', () => {
        expect(0)
            .toBeDefined();
    });

    test('not toBeUndefined', () => {
        expect('')
            .not
            .toBeUndefined();
    });

    test('toBeUndefined', () => {
        expect(undefined)
            .toBeUndefined();
    });

    test('toBeNull', () => {
        expect(null)
            .toBeNull();
    });

    test('toBeNaN', () => {
        expect(NaN)
            .toBeNaN();
    });

});