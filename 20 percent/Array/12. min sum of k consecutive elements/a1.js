// Given an array of N integers. Find the minimum sum of K consecutive elements

// 9 9 -5 9 5 -> 9
// 2 7 6 2 -5 -> 10

let arr = [9,9,-5,9,5];
const k = 3;

let sum = 0;
let min = Infinity;

for(let i=0 ; i<k ; i++){
    sum+= arr[i]
}
min = Math.min(sum,min);
for(let i=k ; i<arr.length ; i++){
    sum = sum - arr[i-k];
    sum+= arr[i];
    min = Math.min(sum,min);
}
console.log(min)