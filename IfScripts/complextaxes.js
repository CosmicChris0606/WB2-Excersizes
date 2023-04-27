"use strict"

//Weekly Gross pay
var grosspay= (payrate * regularhours);

//Annual Gross pay
var annual = (grosspay * 52);
var taxwithheld= (annual * taxrate) / 52;




//Nested 'ifs' grouped by filing status

if (singlefile){
    if (annual < 12000) { 
        taxrate = 0.05;
        console.log(taxwithheld + " is witheld.")
    }
    else if (annual <= 24999.99){
        taxrate = 0.10;
        console.log(taxwithheld + " is witheld.");
    }
    else if (annual <= 74999.99){
        taxrate = 0.15;
        console.log(taxwithheld + " is witheld.");
    }
    else{
        taxrate = 0.2;
        console.log(taxwithheld + " is witheld.");
    }
}
else{   // 'else' refers to joint file
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
