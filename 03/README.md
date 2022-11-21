# Aula 02 - Unit Test

## Texto

```js
it('DEVE encontrar "ana" QUANDO comparado com "banana"', () => {
    expect('banana')
        .toMatch(/ana/)
});  
```

## Lista

```js
describe('Testando lista', () => {
    it('DEVE encontrar "picanha" QUANDO comparado com o vetor', () => {
        expect(['gasolina', 'leite', 'picanha'])
            .toContain('picanha');
    });
});
```

## Excessões

```js

```

## Código assíncrono

```js

```

