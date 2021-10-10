import ArrayAnalysis from "../code/arrayAnalysis";

test('fijarse valor minimo', () => 
    expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).min).toBe(1));

test('fijarse valor maximo', () => 
    expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).max).toBe(8));

test('fijarse maxima longitud', () => 
    expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).length).toBe(6));

test('fijarse promedio', () => 
    expect(ArrayAnalysis([1, 8, 3, 4, 2, 6]).average).toBe(4));

test('fijarse objecto entero', () => 
    expect(ArrayAnalysis([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    }));
