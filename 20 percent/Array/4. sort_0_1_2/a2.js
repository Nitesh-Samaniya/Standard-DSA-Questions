// Sort an array of 0s, 1s and 2s

let arr = [0,2,1,2,0];

let zero = 0;
let one = 0;
let two = 0;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]===0)
        zero++;
    else if(arr[i]===1)
        one++;
    else
        two++;
}

let output = [];

for(let i=0 ; i<zero ; i++){
    output.push(0);
}

for(let i=0 ; i<one ; i++){
    output.push(1);
}

for(let i=0 ; i<two ; i++){
    output.push(2);
}
console.log(output);