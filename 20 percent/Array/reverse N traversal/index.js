const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


let bag = [];

let top = 0;
let left = 0;
let bottom = arr.length-1;
let right = arr.length-1;

for(let i=top ; i<=bottom ; i++){
    bag.push(arr[i][left]);
}
bottom--;

for(let i=bottom ; i>=top ; i--){
    for(let j=left ; j<=right ; j++){
        if(i+j===arr.length-1)
            bag.push(arr[i][j])
    }
}

top++;
bottom++;

for(let i=top ; i<=bottom ; i++){
    bag.push(arr[i][right])
}
console.log(bag);