const arr = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
];

//output -> see img 

let top = 0;
let left = 0;
let bottom = arr.length-1;
let right = arr.length-1;

let ans = [];
let mid_position = Math.floor((arr.length-1)/2);

for(let i=mid_position ; i>=top ; i--){
    ans.push(arr[i][mid_position]);
}

for(let i=mid_position-1 ; i>=left ; i--){
    ans.push(arr[top][i]);
}
top++;

for(let i=top ; i<=bottom ; i++){
    ans.push(arr[i][left]);
}
left++;

for(let i=left ; i<=right ; i++){
    ans.push(arr[bottom][i]);
}
bottom--;
top--;

for(let i=bottom ; i>=top ; i--){
    ans.push(arr[i][right]);
}
console.log(ans)