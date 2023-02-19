const str = "abcxyz";
// const str = "abcdxyz";

const mid = Math.floor((str.length-1)/2);

let ans = "";

if(str.length%2===0){
    for(let i=mid ; i>=0 ; i--)
        ans+= str[i]
    
    for(let i=str.length-1 ; i>mid ; i--)
        ans+= str[i];
}else{
    for(let i=mid-1 ; i>=0 ; i--)
        ans+= str[i]

    ans+= str[mid];
    
    for(let i=str.length-1 ; i>mid ; i--)
        ans+= str[i];
}




console.log(ans);