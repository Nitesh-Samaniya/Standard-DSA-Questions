/*
 what is the day after x days.

 input
 current day -> Monday
 days -> 8

 output -> Tuesday
*/

const current_day = "Sunday";
let days = 8;

let obj = {
    "Monday": 0,
    "Tuesday": 1,
    "Wednesday": 2,
    "Thursday": 3,
    "Friday": 4,
    "Saturday": 5,
    "Sunday": 6,
}

let get_day = obj[current_day] + days;

for(let k in obj){
    if(obj[k] === get_day%7){
        console.log(k);
        break;
    }
}