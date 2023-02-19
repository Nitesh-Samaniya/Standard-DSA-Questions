function checkPrime(num){
    let count = 0;
    for(let i=1 ; i<=num ; i++){
        if(num%i===0)
            count++;
    }
    if(count>2)
        console.log("Not a prime Number");
    else
        console.log("Prime Number")
}

checkPrime(9);