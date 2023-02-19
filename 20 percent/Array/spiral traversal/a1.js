const arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

//output -> 1   5   9   10  11  12  8   4   3   2   6   7

let bag = [];

let top = 0;
let left = 0;
let right = arr[0].length-1;
let bottom = arr.length-1;

let count = 0;
let n = arr.length;
let m = arr[0].length;
while(count<n*m){
    for(let i=top ; i<=bottom && count<n*m ; i++){
        bag.push(arr[i][left]);
        count++;
    }

    left++;
    for(let i=left ; i<=right && count<n*m ; i++){
        bag.push(arr[bottom][i]);
        count++;
    }
    bottom--;
    for(let i=bottom ; i>=top && count<n*m ; i--){
        bag.push(arr[i][right]);
        count++;
    }
    right--;
    for(let i=right ; i>=left && count<n*m ; i--){
        bag.push(arr[top][i]);
        count++;
    }
    top++;
}
console.log(bag.join(' '));