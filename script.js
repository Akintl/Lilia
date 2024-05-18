// Ask the user for their first name and store it in the variable Fname
let Fname = prompt("Please enter your first name:");

// Display a welcome message that contains the name they entered
document.write("Hello " + Fname + ", welcome to our website!<br>");

// Define a constant for the value of Pi
const piValue = 3.1415926;

// Ask the user to input their favorite number and store the value in a variable myFavNum
let myFavNum = parseFloat(prompt("Please enter your favorite number:"));

// Calculate the area of a circle using the user’s favorite number as the radius (r)
// The formula to find the area of a circle is A = πr^2
let myArea = piValue * myFavNum * myFavNum;

// Display the contents of each variable to the webpage in a descriptive message
document.write("You entered " + myFavNum + " as your favorite number.<br>");
document.write(
  "If that was the radius of a circle, the circle’s area would be " +
    myArea.toFixed(6) +
    ".<br>"
);
