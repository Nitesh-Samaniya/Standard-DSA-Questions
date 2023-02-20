const arr = [
    [1,2],
    [3,4],
    [5,6],
    [7,8]
];

const N = arr.length;
const M = arr[0].length;

for(let i=0 ; i<N ; i++){
    let bag = [];
    if(i%2===1){
        for(let j=M-1 ; j>=0 ; j--){
            bag.push(arr[i][j])
        }
    }else{
        for(let j=0 ; j<M ; j++){
            bag.push(arr[i][j])
        }
    }
    console.log(bag);
}