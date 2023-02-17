// find vowels and consonant in the string.

const str = "nitesh";

for(let i=0 ; i<str.length ; i++){
    let x = str[i];
    if(x==='a' || x==='e' || x==='i' || x==='o' || x==="u"){
        console.log("vowel" ,x, i);
    }else{
        console.log("consonant", x, i)
    }
}