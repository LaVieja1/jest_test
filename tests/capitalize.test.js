import { test } from "@jest/globals";
import capitalize from '../code/capitalize';

test('santi no esta capitalizado', () => {
    expect(capitalize("santi")).toBe("Santi");
});

test('capitalizar cada palabra', () => {
    expect(capitalize("santi esta escribiendo esto")).toBe(
        "Santi Esta Escribiendo Esto"
    );
});

test('no importan los espacios', () => {
    expect(capitalize("hey    vos")).toBe("Hey    Vos");
});