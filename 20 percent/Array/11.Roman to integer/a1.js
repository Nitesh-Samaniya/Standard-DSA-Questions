// converting roman to interger

function convert(s){
    var map = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000,
    };
    var res = 0;
    for(var i = 0 ; i < s.length;i++){
        
        if(map[s[i]] < map[s[i+1]]){
            res += (map[s[i+1]] - map[s[i]]);
            i++;
        }else res += map[s[i]]
    }
    return res;
}
console.log(convert("IV"))