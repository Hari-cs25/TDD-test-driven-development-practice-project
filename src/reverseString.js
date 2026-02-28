export function reverseString(string){
    if(string === ''){
        throw new Error('No string is passed!');
    }else if(typeof string === 'number'){
        throw new Error('can not reverse numbers');
    }
    const words = string.split('');
    let aL = words.length-1;
    const mWords = [];
    for(let i=0; i<words.length; ++i){
        mWords[aL-i] = words[i];
    }
    return mWords.join('');
}