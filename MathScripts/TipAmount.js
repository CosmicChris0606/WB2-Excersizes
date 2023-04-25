"use strict"

var bill= 10;
var tip = 10;

var total= bill.toFixed(2) * ( (tip.toFixed(2) / 100) + 1 );

console.log("With a %" + tip + " tip, The tip on a $" + bill + " food bill is $" + total)