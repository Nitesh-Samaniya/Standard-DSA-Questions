// A positive integer of n digits is called an Armstrong number of order n (order is number of digits) if. 

// abcd… = pow(a,n) + pow(b,n) + pow(c,n) + pow(d,n) + …. 

// Input : 153
// Output : Yes
// 153 is an Armstrong number.
// 1*1*1 + 5*5*5 + 3*3*3 = 153

let num = 153;
num = String(num);
let ans = 0;

for(let i=0 ; i<num.length ; i++){
    let x = num[i];
    x = Math.pow(x,num.length);
    ans+= x;
}

if(ans == num)
    console.log("yes");
else   
    console.log("no");