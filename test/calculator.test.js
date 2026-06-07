const { add, subtract, multiply, divide } = require('../src/calculator');

test('soma 2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
test('subtração 5 - 2 = 3', () => expect(subtract(5, 2)).toBe(3));
test('multiplicação 3 * 4 = 12', () => expect(multiply(3, 4)).toBe(12));
test('divisão 10 / 2 = 5', () => expect(divide(10, 2)).toBe(5));
test('divisão por zero lança erro', () => expect(() => divide(5, 0)).toThrow('Divisão por zero'));
