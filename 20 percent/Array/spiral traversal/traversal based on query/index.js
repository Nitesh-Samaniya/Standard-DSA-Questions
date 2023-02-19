//see img for input and output.

const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const query = 2;

if(query === 1){
    for(let i=0 ; i<arr.length ; i++){
        let bag = [];
        if(i%2===0){
            for(let j=0 ; j<arr.length ; j++){
                bag.push(arr[i][j]);
            }
        }else{
            for(let j=arr.length-1 ; j>=0 ; j--){
                bag.push(arr[i][j]);
            }
        }
        console.log(bag.join(' '));
    }
}else{
    for(let i=0 ; i<arr.length ; i++){
        let bag = [];
        if(i%2===0){
            for(let j=arr.length-1 ; j>=0 ; j--){
                bag.push(arr[i][j]);
            }
        }else{
            for(let j=0 ; j<arr.length ; j++){
                bag.push(arr[i][j]);
            }
        }
        console.log(bag.join(' '));
    }
}