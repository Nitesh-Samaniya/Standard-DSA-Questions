// Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

let nums = [2,7,11,15];
let target = 9;

function twoSum(nums, target){
    for(let i=0 ; i<nums.length ; i++){
        for(let j=i+1 ; j<nums.length ; j++){
            if(nums[i] + nums[j] === target)
                return [i,j];
        }
    }
}

console.log(twoSum(nums,target))