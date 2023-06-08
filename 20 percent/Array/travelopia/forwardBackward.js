//output =  1,2,3,4,5,4,3,2,1

let N = 5;
let bag = "";
for(let i=1 ; i<=(N*2)-1 ; i++){
        bag+= i <= N ? i : 2 * N - i
}
console.log(bag);