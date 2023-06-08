let str = "my name is nitesh samniya";
str = str.replace(/\s/g, '').toLowerCase();

let obj = {};
let count = 0;

for(let i=0 ; i<str.length ; i++){
    if(obj[str[i]] === undefined){
        obj[str[i]] = 1;
    }
    else{
        obj[str[i]]++;
    }

    if(obj[str[i]] > count){
        count = obj[str[i]]
    }

}

const output = [];

for(let k in obj){
    if(obj[k] === count){
        output.push(k);
    }
}

console.log(output)