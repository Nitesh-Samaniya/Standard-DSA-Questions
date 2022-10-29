/*
Reverse an Array
Given an array A of size N, print the reverse of it.
Example:

Input:
1 2 3 4

Output:
4 3 2 1
*/

let arr = [1,2,3,4]
let i=0;
let j=arr.length-1;

console.log("arr before rotaiona",arr);

const swap = (arr,i,j)=>{
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp;
}

while(i<j){
    swap(arr,i,j);
    i++;
    j--;
}

console.log("arr after rotaiona",arr);
