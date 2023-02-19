// intersection of two array means common elements of both the arrays

const arr1 = [1,2,3,4,5];
const arr2 = [3,4,5,6,7];

const output = [];

for(let i=0 ; i<arr1.length ; i++){
    for(let j=0 ; j<arr2.length ; j++){
        if(arr1[i] === arr2[j]){
            output.push(arr1[i]);
            break;
        }
    }
}

console.log(output)