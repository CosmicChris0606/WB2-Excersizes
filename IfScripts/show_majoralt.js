"use strict"

// define the input.
var studentName = "Chris";
var studentMajor = "QRS";

// create a spot for the needed output:
var studentMajorDescription;
var studentMajorLocation;

//calculate our unknowns (description, location) using only our knowns (major code)
if (studentMajor !== "ENG", "BIOL", "CSCI", "HIST", "MKT"){
studentMajor = "unknown"
studentMajorDescription = "unknown";
studentMajorLocation = "unknown";
}

//todo: complete the code here so that later code has the right values in the variables declared above.
if (studentMajor == "ENG"){
 studentMajorDescription = "English";
 studentMajorLocation = "Kerr Hall, Room 201";

}
if (studentMajor == "BIOL"){
    studentMajorDescription = "Biology";
    studentMajorLocation = "Science Bldg, Room 310";
   
   }
if (studentMajor == "CSCI"){
    studentMajorDescription = "Computer Science";
    studentMajorLocation = "Sheppard Hall, Room 314";
   
   }
if (studentMajor == "HIST"){
    studentMajorDescription = "History";
    studentMajorLocation = "Kerr Hall, Room 114";
   
   }
if (studentMajor == "MKT"){
    studentMajorDescription = "Marketing";
    studentMajorLocation = "Westly Hall, Room 310";
   
   }

// Display the output
    console.log("Student: " + studentName) ;
    console.log("Major Code: " + studentMajor);
    console.log("Major: " + studentMajorDescription);
    console.log("Location: " + studentMajorLocation);
