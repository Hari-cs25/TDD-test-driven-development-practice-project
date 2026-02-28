function alphabetCreator(){
    const array = 'abcdefghijklmnopqrstuvwxyz';
    return array.split('');
}

function cabitalAlphabetCreator(){
    const array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return array.split('');
}

const alphabets = alphabetCreator();
const cabitalAlphabets = cabitalAlphabetCreator();

const alphabetStack = [];

const shift = (string, snum)=>{

    const array = string.split('');

    array.forEach((item)=>{

        if(alphabets.includes(item) || cabitalAlphabets.includes(item)){

              for(let i=0; i<alphabets.length; ++i){

                if(alphabets[i] === item){

                    let temp = i+snum;
                    if(temp>25){
                        temp-=26;
                        }
                   // console.log(`Pused user input string is:${i}, ciphered input is in the ${i+temp} index value: `,alphabets[temp]);
                    alphabetStack.push(alphabets[temp]);

                }else if( cabitalAlphabets[i] === item ){

                     let temp = i+snum;
                    if(temp>25){
                        temp-=26;
                    }
                  //  console.log(`Pused user input string is:${i}, ciphered input is in the ${i+temp} index value: `,cabitalAlphabets[temp]);
                    alphabetStack.push(cabitalAlphabets[temp]);
                }
            }
        }else{
            alphabetStack.push(item);
        }
    });
    return alphabetStack.join('');
}

const Cipher = (string, snum)=>{
    alphabetStack.length = 0;
    return shift(string, snum);
}

export {Cipher};