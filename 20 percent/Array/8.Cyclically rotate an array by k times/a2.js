//right rotation 
const arr = [1, 2, 3, 4, 5];
const rotations = 2; // number of rotations

const rotated = arr.slice(rotations).concat(arr.slice(0, rotations));

console.log(rotated); // [3, 4, 5, 1, 2]
