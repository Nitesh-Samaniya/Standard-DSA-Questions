const str = "abcdra";
console.log(isUnique(str));

function isUnique(str){
    let obj = {};
    for(let i=0 ; i<str.length ; i++){
        if(obj[str[i]]===undefined)
            obj[str[i]] = 1;
        else
            return "NO";
    }
    return "Yes";
}