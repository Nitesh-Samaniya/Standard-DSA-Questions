let str = "Nitesh";

for(let i=0 ; i<str.length ; i++){
    for(let j=i ; j<str.length ; j++){
        let bag = "";
        for(let k=i ; k<=j ; k++){
            bag+= str[k];
        }
        console.log(bag)
    }
}