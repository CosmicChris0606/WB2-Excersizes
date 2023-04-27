"use strict"


var a = 6;
var b = 9;
var c = 1;

if (a < b && a < c) {
    console.log(a + " is the smallest number")
}
else if (b < a && b < c) {
    console.log(b + " is the smallest number")
}
else {
    console.log(c + " is the smallest number")
}


if (b < a && a < c) {
    console.log(a + " is the largest number")
}
else if (a < b && c < b) {
    console.log(b + " is the largest number")
}
else {
    console.log(c + " is the largest number")
}



