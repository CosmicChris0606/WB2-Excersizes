"use strict";

var year= 1900;

var isMultipleOf4 = (year % 4 == 0);
var isMultipleOf100 = (year % 100 == 0);
var isMultipleOf400 = (year % 400 == 0);

var isLeapYear;

if(isMultipleOf4 && !isMultipleOf100){
    isLeapYear = true;
}
if(isMultipleOf4 && isMultipleOf100 && isMultipleOf400){
    isLeapYear = true;
}

if(isLeapYear) {
    console.log(year + " is a leap year. (Matt)");
}
else
{
    console.log(year + " is not a leap year. (Matt)");
}

/*
To be a leap year, the year number must be divisible by four 
– except for end-of-century years, which must be divisible by 400. 
This means that the year 2000 was a leap year, although 1900 was not. 2024, 2028, 2032 and 2036 are all leap years.
*/

// leap year must be divisible by 4 BUT NOT 100 OR be divisible by 400 (end of century years)//

if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)){
    console.log(year + " is a leap year (Chris)")
}
else{
    console.log(year + " is NOT a leap year (Chris)");
}





