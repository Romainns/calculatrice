import { addition, soustraction, multiplication, division } from './calcul.js';

test('addition', () => {
    expect(addition(2,8)).toBe(10);
});
test('soustraction', () => {
    expect(soustraction(10,8)).toBe(2);
});
test('multiplication', () => {
    expect(multiplication(2,8)).toBe(16);
});
test('division', () => {
    expect(division(8,2)).toBe(4);
});