const arr = [1,56,48,94,11];
let largest = arr[0];
let second_larget = arr[0];

for(let i=1 ; i<arr.length ; i++){
    if(arr[i] > largest){
        second_larget = largest;
        largest = arr[i];
    }else if(arr[i] > second_larget && arr[i] < largest){
        second_larget = arr[i];
    }
}

console.log(second_larget);