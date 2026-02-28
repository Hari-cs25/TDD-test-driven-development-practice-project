import *as calculator from '../src/calculator';

test('add 2+2 equals to 4',()=>{
    expect(calculator.add(2, 2)).toBe(4);
});

test('subract 4-2 equals to 2',()=>{
    expect(calculator.subract(4, 2)).toBe(2);
});

test('multiply 3 * 9 equals to 27', ()=>{
    expect(calculator.multiply(3, 9)).toBe(27);
});

test('divaide 6 / 2 equals to 3', ()=>{
    expect(calculator.divaide(6, 2)).toBe(3);
});