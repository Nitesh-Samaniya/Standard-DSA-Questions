/*
Given an array of size N containing only 0s, 1s, and 2s sort it. 
Input: 
arr[]= {0 2 1 2 0}
Output:
0 0 1 2 2
*/

let arr = [0,2,1,2,0];

arr.sort((a,b)=>{
    return a-b;
})
console.log(arr.join(' '))