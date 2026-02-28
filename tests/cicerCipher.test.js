import {Cipher} from '../src/cecerCipher.js';

test('shift "abc" into "bcd"', ()=>{
    expect(Cipher("abc", 1)).toBe("bcd");
});

test('when end reaches it wrap around and select the first', ()=>{
    expect(Cipher("xyz", 3)).toBe("abc");
});