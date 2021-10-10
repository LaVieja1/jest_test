import reverseString from "../code/reverseString";

test("String no esta reversada", () => 
    expect(reverseString("hola")).toBe("aloh"));

test("los espacios no importan", () => {
    expect(reverseString("  hola")).toBe("aloh  ")
});
