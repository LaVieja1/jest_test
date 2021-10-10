import caesarCipher from "../code/caesarCipher";

test('hello world equals mjqqt btwqi with a shift of 5', () => {
    expect(caesarCipher('hello world', 5)).toBe('mjqqt btwqi');
});

test('maneja numeros negativos', () => {
    expect(caesarCipher('hello world', -10)).toBe('xubbe mehbt');
});

test('maneja numeros grandes', () => {
    expect(caesarCipher('hello world', 1000)).toBe('tqxxa iadxp');
});

test('maneja mayusculas', () => {
    expect(caesarCipher('HeLlO WoRlD', 5)).toBe('MjQqT BtWqI');
});
