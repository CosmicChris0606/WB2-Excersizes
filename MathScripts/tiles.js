"use strict"


var length= 12;
var width = 4;
var area= (length * width);
var boxes= (area / 12);
var boxextra = Math.ceil(boxes * 0.1);
var boxtotal= Math.ceil(boxes * 1.1)

console.log(boxtotal) 

var boxtotal= Math.ceil(boxes +  Math.ceil(boxes * 0.1))

console.log(boxtotal) 

var boxtotal = Math.ceil(boxes * 1.1);


console.log(boxtotal) 