//Given a binary matrix, change 0 to 1 and 1 to 0.

const arr = [
    [0,1,0],
    [1,1,0],
    [1,0,1]
]

for(let i=0 ; i<arr.length ; i++){
    for(let j=0 ; j<arr.length ; j++){
        if(arr[i][j]===0)
            arr[i][j] = 1;
        else    
            arr[i][j] = 0
    }
}

for(let i=0 ; i<arr.length ; i++){
    console.log(arr[i].join(' '));
}