let arr = [1,2,3,4];
n = 4;

let left = [];
let right = [];
left[0] = 1;
right[n-1] = 1;

for(let i=1 ; i<n ; i++){
    left[i] = arr[i-1] * left[i-1];
}

for(let i=n-2 ; i>=0 ; i--){
    right[i] = arr[i+1] * right[i+1];
}

let ans = [];

for(let i=0 ; i<n ; i++){
    ans.push(left[i]*right[i]);
}

console.log(ans.join(' '))