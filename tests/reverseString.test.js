import {reverseString} from '../src/reverseString.js';

test('If input is empty (""), throw Error', ()=>{
    expect(()=>{reverseString('')}).toThrow(Error);
});

test('Throw error when Numbers are passed instead of strings', ()=>{
    expect(()=>{reverseString(89)}).toThrow(Error);
});

test('reverse "apple" into "elppa"', ()=>{
    expect(reverseString("apple how")).toBe("woh elppa");
});