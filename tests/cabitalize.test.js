import{cabital} from '../src/cabitalize.js';

test('convert a into A',()=>{
    expect(cabital('a')).toBe('A');
});

test('change "ant cat" into "Ant cat"', ()=>{
    expect(cabital('ant cat')).toBe('Ant cat');
});

test('throw error when input is empty', ()=>{
    expect(()=>{cabital('')}).toThrow(Error);
});

test('show error "2ant" pass like this',()=>{
    expect(()=>{cabital('2ant')}).toThrow(Error);
});
