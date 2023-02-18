let string = "aabbc"
let obj = {};
const N = string.length;

for(let i=0 ; i<N ; i++){
    if(obj[string[i]]===undefined)
        obj[string[i]] = 1;
    else
        obj[string[i]]++;
}

let countOdd = 0;

for(let k in obj){
    if(obj[k]%2==1)
        countOdd++;
}

if(countOdd<=1)
    console.log("Possible!")
else
    console.log("Not Possible!")