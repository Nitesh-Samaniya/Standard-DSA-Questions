//factorial of a number 

function fact(n){
    if(n===1)
        return 1
    
    return n*fact(n-1);
}

const output = fact(6);
console.log(output)