// const str = "nitesh samaniya";
// const first_char = str[0].toUpperCase();
// const restChars = str.slice(1)

// console.log(first_char + restChars)

function makefirstCharUpper(str){
    let strArr = str.split(' ');
    const output = [];

    for(let i=0 ; i<strArr.length ; i++){
        output.push(firstChar(strArr[i]));
    }

    console.log(output.join(' '));
}

function firstChar(str){
    let first_char = str[0].toUpperCase();
    let restChar = str.slice(1);
    return first_char+restChar;
}

makefirstCharUpper("my name is Nitesh samaniya");