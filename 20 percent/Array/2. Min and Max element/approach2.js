// sort the array in ascending order and get your first and last element as min and max.

// T.C-> O(N log N)
// S.C-> O(1)

let arr = [3, 2, 1, 5600, 10000, 167];

arr.sort((a,b)=>{
    return a-b;
})
console.log("min", arr[0]);
console.log("max", arr[arr.length-1]);