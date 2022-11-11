// Given an array, rotate the array by k position in clock-wise direction.

// Input:
// A[] = {1, 2, 3, 4, 5}
// k = 3

// Output:
// 3 4 5 1 2

let arr = [1,2,3,4,5];
const k = 3;

//step: 1 reverse the whole array
let left=0;
let right = arr.length-1;

const swap = (arr,left,right)=> {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
}

while(left<right){
    swap(arr,left,right)
    left++;
    right--;
}

//step 2: reverse first k elements
left = 0;
rigth = k-1;

while(left<right){
    swap(arr,left, right);
    left++;
    right--;
}

//reverse kth element to last element

left = k;
right = arr.length-1;

while(left<right){
    swap(arr,left, right);
    left++;
    right--;
}

console.log(arr);