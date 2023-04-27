"use strict"



var payrate = 17.30;
var hoursworked = 20;
var regularhours= 40;
var overtime= (hoursworked - 40)
var regularcheck= (payrate * regularhours);
var overtimechk= regularcheck + ( 1.5 * payrate * overtime);



if (hoursworked > regularhours) {
    console.log(overtimechk)
}
else{
    console.log(regularcheck)
}



