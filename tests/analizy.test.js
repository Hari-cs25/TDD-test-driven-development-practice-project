import{analizer}from '../src/analizy.js';

test('return average of passed array of numbers', ()=>{
    const temp = Math.floor(((2+5+1)/3));
    console.log(temp);
    expect(average([2,5,1])).toBe(temp);
})

test('return minimun in a array of numbers passed as input', ()=>{
    expect(min([2,5,1])).toBe(1);
});

test('return maximu in a array of numbers passed as input',()=>{
    expect(max([2,5,1])).toBe(5);
});

test('return the length of an array passed as an input', ()=>{
    expect(length([2,5,1])).toBe(3);
});

test.only('Return an object which contains average,minimum,maximum and length of an array', ()=>{
    expect(analizer([2,5,1])).toStrictEqual({average:2,
                                    min:1,
                                    max:5,
                                    length:3 });
                                });