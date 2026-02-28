 export function cabital(string){

    const list = ['1','2','3','4','5','6','7','8','9','0','#','_','-','+','&','^','%','$','!','='];
    const words = string.split('');

    if(string === ''){
        throw new Error('Input is empty!');
    }else if(list.includes(words[0])){
        throw new Error('Can not cabitalize Numbers');
    }

    words[0] = words[0].toUpperCase();
    return words.join('')
}
