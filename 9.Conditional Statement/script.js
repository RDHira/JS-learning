// ****** if Statement*****************
//-->the if statement to specify a block of JavaScript code to be executed if a condition is true.
var a=30;
var b=20;
if(a>b){
    document.write("A is greater");
    document.write("<br>");
}

// **************** if else Statement***************
// -->the else statement to specify a block of code to be executed if the condition is false.
var age=12;
if(age>=18){
    document.write("You can play with us!");
}
else{
    document.write("You are not play with us!");
}
document.write("<br>");


// ************ if else if Statement *******************
//-->the else if statement to specify a new condition if the first condition is false.
var marks=80;
if(marks>=80 && marks<=100){
    document.write("You have passed in Dictision Division");
}
else if(marks>=60 && marks<80){
    document.write("You have passed in 1st Division");
}
else if(marks>=45 && marks<60){
    document.write("You have passed in 2nd Division");
}
else if(marks>=33 && marks<45){
    document.write("You have passed in 3rd Division");
}
else if(marks<33){
    document.write("You are Fail");
}
else{
    document.write("Please enter valid data");
}
document.write("<br>");

// ****************Switch Case********************************
// -->The switch statement is used to perform different actions based on different conditions.
var day=5;
switch (day){
    case 0:
        document.write("Sunday");
    break;
    case 1:
        document.write("Monday");
        break;    
        case 2:
        document.write("Tuesday");
        break;    
        case 3:
        document.write("Wednesday");
        break;    
        case 4:
        document.write("Thrusday");
        break;    
        case 5:
        document.write("Friday");
        break; 
        case 6:
        document.write("Saturday");
        break;  
        default:
        document.write("Please enter the valid data");
                
}