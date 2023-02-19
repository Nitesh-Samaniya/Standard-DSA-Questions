// Input : 
// arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }

// Output : 
// 1  3  2  11  6  -1  -7  -5

let arr = [1, -1, 3, 2, -7, -5, 11, 6];
let negativeArr = [];
let positiveArr = [];
const output = []

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]<0)
        negativeArr.push(arr[i]);
    else
        positiveArr.push(arr[i]);
}

for(let i=0 ; i<positiveArr.length ; i++){
    output.push(positiveArr[i]);
}

for(let i=0 ; i<negativeArr.length ; i++){
    output.push(negativeArr[i]);
}

console.log(output)