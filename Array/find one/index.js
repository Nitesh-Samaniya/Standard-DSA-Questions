// find the number which is present only one time.
const arr = [1,2,4,1,2,5,4];
const obj = {};

for(let i=0 ; i<arr.length ; i++){
    if(obj[arr[i]] === undefined)
        obj[arr[i]] = 1;
    else    
        obj[arr[i]]++;
}

for(let k in obj){
    if(obj[k] === 1){
        console.log(k);
        break;
    }
}