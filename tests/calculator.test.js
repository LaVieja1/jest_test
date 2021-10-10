import calculator from "../code/calculator";

test('Sumar 1 y 2 es igual a 3', () => 
    expect(calculator.add(1, 2)).toBe(3));

test('Restar 1 y 2 es igual a -1', () =>
    expect(calculator.subtract(1, 2)).toBe(-1));

test('Multiplicar 2 y 4 es igual a 8', () =>
    expect(calculator.multiply(2, 4)).toBe(8));

test('Dividir 4 y 2 es igual a 2', () =>
    expect(calculator.divide(4, 2)).toBe(2));

test('Numero dividido por 0 es igual a nada', () =>
    expect(calculator.divide(10, 0)).toBeNull());