"use strict"

var IR = 5;
var principle = 200
var years = (72 / IR.toFixed(2))
var endprinciple = (principle * 2)

console.log("At an intrest rate of " + IR + "%, your savings account starting at $"
    + principle + " will be worth $" + endprinciple + " in " + years + " years")