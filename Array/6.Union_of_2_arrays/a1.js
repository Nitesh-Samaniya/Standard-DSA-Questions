// The task is to find union between these two arrays.

// Input:
// 1 2 3 4 5
// 1 2 3

// Output: 
// 1 2 3 4 5

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,3];
const obj = {};

for(let i=0 ; i<arr1.length ; i++){
    if(obj[arr1[i]]===undefined)
        obj[arr1[i]] = 1;
}

for(let i=0 ; i<arr2.length ; i++){
    if(obj[arr1[i]]===undefined)
        obj[arr1[i]] = 1;
}

const bag = [];

for(let k in obj){
    bag.push(+k);
}
console.log(bag.join(' '));