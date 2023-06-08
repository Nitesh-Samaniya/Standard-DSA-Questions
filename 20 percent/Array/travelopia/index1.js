const arr = [1,2,3,4,5];

// const sum = arr.reduce((acc, el)=> acc + el, 0);
const sum = arr.reduce((acc, el)=> {
    if(el%2 === 1){
        return acc + el;
    }
    return acc;
},0)
console.log(sum);