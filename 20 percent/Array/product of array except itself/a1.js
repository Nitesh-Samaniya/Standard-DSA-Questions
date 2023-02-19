let arr = [1,2,3,4];
n = 4;

let ans = [];

for(let i=0 ; i<n ; i++){
    let prod = 1;
    for(let j=0 ; j<n ; j++){
        if(i!==j){
            prod = prod * arr[j];
        }
    }
    ans.push(prod)
}
console.log(ans.join(' '))