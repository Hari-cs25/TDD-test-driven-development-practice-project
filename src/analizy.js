

const analizer = (array)=>{

     let sum = 0;
    array.forEach((item)=>{
        sum+=item;
    });
     let average = Math.floor(sum/array.length);
    
     let min = Math.min(...array);

     let max = Math.max(...array);

     let length = array.length;
console.log({average,min,max,length});
     return{average,min,max,length};
}
export{analizer};