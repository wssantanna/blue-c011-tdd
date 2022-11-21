
describe('Testando texto', () => {
    it('DEVE encontrar "ana" QUANDO comparado com "banana"', () => {
        expect('banana')
            .toMatch(/ana/)
    });  
});

describe('Testando lista', () => {
    it('DEVE encontrar "picanha" QUANDO comparado com o vetor', () => {
        expect(['gasolina', 'leite', 'picanha'])
            .toContain('picanha');
    });
});

describe('Testando excessões', () => {

    it('DEVE retornar um erro QUANDO a extensão inválida', () => {
        expect( () => { throw "Formato .exe inválido" })
            .toThrow(/.exe/)
    });

});

const getPosts = require('./posts');

describe('Testando código assíncrono', () => {

    it('', async () => {
        expect(getPosts())
            .toBeInstanceOf(Array)
    });

});