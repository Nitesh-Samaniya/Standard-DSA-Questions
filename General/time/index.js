// Logical: no of days hrs mins seconds in 10 lac seconds (calculator / console was allowed)

const totalSeconds = 100000;
const secondsInMinute = 60;
const secondsInHour = 60 * secondsInMinute;
const secondsInDay = 24 * secondsInHour;

const days = Math.floor(totalSeconds / secondsInDay);
const hours = Math.floor((totalSeconds % secondsInDay) / secondsInHour);
const minutes = Math.floor((totalSeconds % secondsInHour) / secondsInMinute);
const seconds = totalSeconds % secondsInMinute;

console.log(`${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`);


