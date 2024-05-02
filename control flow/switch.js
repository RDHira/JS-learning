//Switch Statement:
//-> Evaluates an expression and executes code associated with the matching case label.
//Syntax:
/* switch (key) {
     case value:
        
         break;

     default:
         break;
 }  */

 //Example:1
 //Taking Number key
 const day = "3"
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;

    default:
        console.log("default case match");
        break;
}

// Example:2
 // Taking String key
const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}

// Output: Tuesday
//Output: March