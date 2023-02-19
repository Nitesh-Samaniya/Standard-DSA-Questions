//By Iterating every element

// T.C-> O(N)
// S.C-> O(1)

let arr = [3, 7];
let min = Infinity;
let max = -Infinity;

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]<min)
        min = arr[i];
    
    if(arr[i]>max)
        max = arr[i];
}

console.log("min: ",min);
console.log("max: ",max);
;