function isAnagram(string1, string2){

    let str1 = string1.replace(/\s/g, '').toLowerCase();//
    let str2 = string2.replace(/\s/g, '').toLowerCase();

    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    if(str1.length !== str2.length){
        return false;
    }

    if(str1 === str2){
        return true;
    }
    else{
        return false;
    }

}

console.log(isAnagram("List en", "silE  nt"))