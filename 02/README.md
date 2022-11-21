# Aula 02 - Unit Test

## O que fazem os testes unitários?

 - Como em seu nome, testam uma UNIDADE/BLOCO de código de um recurso para verificar sua qualidade e consistência

## Números

### `toBe()`

```js
test('2+2 == 4', ()=> {
    expect(2+2)
        .toBe(4);
});
```

### `toEqual()`

```js
test('2+2 == 4', ()=> {
    expect(2+2)
        .toEqual(4);
});
```

### `toBeCloseTo()`

```js
test('0.1 + 0.2 equivale á 0.3', ()=> {
    expect(0.1 + 0.2)
        .toBeCloseTo(0.3);
});
```

### `toBeGreaterThan()`

```js
test('', ()=> {
    expect(4)
        .toBeGreaterThan(3);
});
```

### `toBeGreaterThanOrEqual()`

```js
test('', ()=> {
    expect(4)
        .toBeGreaterThanOrEqual(4);
});
```

### `toBeLessThan()`

```js
test('', ()=> {
    expect(4)
        .toBeLessThan(5);
});
```

### `toBeLessThanOrEqual()`

```js
test('', ()=> {
    expect(4)
        .toBeLessThanOrEqual(4.5);
});
```

## Tipos

### `toBeInstanceOf()`

```js
test('', () => {
    expect(Function)
        .toBeInstanceOf(Function);
});
```

## Comparações implicitas (falsy|truthy)

### `toBeTruthy()`

```js
test('', () => {
    expect(true)
        .toBeTruthy();
});
```

### `toBeFalsy()`

```js
test('', () => {
    expect(false)
        .toBeFalsy();
});
```

## null, NaN, underfined


### `toBeDefined()`

```js

```

### `toBeUndefined()`

```js

```

### `toBeNull()`

```js

```

### `toBeNaN()`

```js

```

## not 