// calculate the sum of elements which are not on borders.

const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [1,2,3,4],
    [5,6,7,8]
];

let sum = 0;
for(let i=0 ; i<arr.length ; i++){
    for(let j=0 ; j<arr.length ; j++){
        if(i===0 || i===arr.length-1 || j===0 || j===arr.length-1)
            continue;
        else{
            sum+= arr[i][j];
        }
    }
}
console.log(sum);