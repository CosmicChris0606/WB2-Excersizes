"use strict"
// Hour witten in military time

var hour= 9
var minute = 45
var minutes= (minute / 60)
var decimaltime = hour + minutes

console.log(decimaltime)



if ( 0 < hour && hour <= 10){
    console.log("good morning")
}
else if (10 <= hour && hour < 17){
console.log("Good day")
}
else if (17 <= hour && hour <= 24){
    console.log("Good evening")
}