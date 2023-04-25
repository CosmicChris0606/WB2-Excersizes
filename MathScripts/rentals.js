"use strict"


var pass = 38;
var vanamt = Math.ceil((pass / 15));
var vancost = (vanamt * 250);
var perperson = (vancost.toFixed(2) / pass)

console.log(perperson)



/* With 38 ppl, the cost per person was $19.73. You collect need to coolect 750 
total because 38 people need 3 buses and you can't have a partial bus. This is where the leftover comes from */

