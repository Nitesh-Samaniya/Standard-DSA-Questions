const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let bag = [];
let top = 0;
let bottom = arr.length-1;
let right = arr.length-1;
let left = 0;

for(let i=bottom ; i>=top ; i--){
    bag.push(arr[i][left]);
}
left++;

for(let i=left ; i<=right ; i++){
    bag.push(arr[i][i]);
}
bottom--;

for(let i=bottom ; i>=top ; i--){
    bag.push(arr[i][right]);
}

console.log(bag)