// Z-traversal~
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

//output -> 1   2   3   5   7   8   9

let top = 0;
let left = 0;
let bottom = arr.length-1;
let right = arr[0].length-1;

let ans = [];

for(let i=left ; i<=right ; i++){
    ans.push(arr[top][i]);
}
right--;
top++;
for(let i=top, j=right ; i<=bottom && j>=left ; i++,j--){
    if(i+j===arr.length-1)
        ans.push(arr[i][j]);
}
left++;
right++;
for(let i=left ; i<=right ; i++){
    ans.push(arr[bottom][i])
}
console.log(ans)