"use strict"

//Weekly Gross pay
var grosspay= (payrate * regularhours);

//Annual Gross pay
var annual = (grosspay * 52)

var singlefile;
var taxrate;

//Nested if grouped by filing status

if (singlefile){
    if (annual < 12000) { 
        taxrate = 0.05;
    }
    else if (annual <= 24999.99){
        taxrate = 0.10;
    }
    else if (annual <= 74999.99){
        taxrate = 0.15;
       
    }
    else{
        taxrate = 0.2;
    }
}
else{
    if (annual < 12000) { 
        taxrate = 0.0;
    }
    else if (annual <= 24999.99){
        taxrate = 0.06;
    }
    else if (annual <= 74999.99){
        taxrate = 0.11;
    }
    else{
        taxrate = 0.2;
    } 
}

//Nested if grouped by income (each if alternates between filing statuses with the same income)

if(annual < 12000){
    if(singlefile){
        taxrate = 0;
    }
    else{
        taxrate = 0;
    }
}
else if (annual <= 24999.99){
    if(singlefile){
        taxrate = 0;
    }
    else{
        taxrate = 0;
    }
}


if (singlefile && annual < 12000){
    console.log("Tax rate of 5%")
}
else if(singlefile && annual < 12000){
    console.log("Tax rate of %0")
}
else if(singlefile == true && ( 12000 <= annual && annual < 30000)){

}