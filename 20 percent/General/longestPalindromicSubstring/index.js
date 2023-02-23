const str = "theracecarisgood";
let len = 0;
for(let i=0 ; i<str.length ; i++){
    for(let j=i ; j<str.length ; j++){
        let bag = "";
        for(let k=i ; k<=j ; k++){
            bag+= str[k];
        }
        if(bag === bag.split('').reverse().join('') && len<bag.length){
            len = bag.length;
        }
    }
}
console.log(len);