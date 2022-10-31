// Find the "Kth" max and min element of an array
/*
    Input:
    arr[] = 7 10 4 3 20 15 -> 3 4 7 10 15 20
    K = 3
    Min: 7 Max: 10
*/ 

let arr = [7,10,4,3,20,15];
const k = 3;

arr.sort((a,b)=> {
    return a-b;
})

const min = arr[k-1];
const max = arr[arr.length-3]

console.log("array: ",arr);
console.log("Min:", min, "Max", max);