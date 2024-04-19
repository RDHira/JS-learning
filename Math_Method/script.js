// ************Math.round(x)************************
// Math.round(x) returns the value of x rounded to its nearest integer.
let rd=Math.round(3.58);  //output: 4
document.write(rd);
document.write("<br>")

// ******************Math.pow(x,y)********************************
// Math.pow(x, y) returns the value of x to the power of y
let pw=Math.pow(3,2);   //output: 9
document.write(pw);
document.write("<br>")

// *******************Math.sqrt()**************************************
// Math.sqrt(x) returns the square root of x
let sr=Math.sqrt(4);    //output: 2
document.write(sr);
document.write("<br>")

// **************Math.abs(x)******************************
// Math.abs(x) returns the absolute (positive) value of x.
let ab=Math.abs(-66);    //output: 66
document.write(ab);
document.write("<br>")

// ***********Math.ceil(x)****************************
// Math.ceil(x) returns the value of x rounded up (Upper_Value) to its nearest integer.
let cel=Math.ceil(3.23);      //output: 4
document.write(cel);
document.write("<br>")

// *********Math.floor(x)*********************************
// Math.floor(x) returns the value of x rounded down (Lower_Value) to its nearest integer
let fr=Math.floor(3.23);
document.write(fr);
document.write("<br>")       //output= 3

// ****************Math.sin(x)***********************************
// Math.sin(x) returns the sine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.
let si=Math.sin(90 * Math.PI / 180);
document.write(si);
document.write("<br>")            //Output= 1

//*************Math.cos(x)***************************** */
// Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).
// If you want to use degrees instead of radians, you have to convert degrees to radians:
// Angle in radians = Angle in degrees x PI / 180.
let co=Math.sin(0 * Math.PI / 180);
document.write(co);
document.write("<br>")            //Output= 1


//*************Math.min()************************
//Math.min() returns the lowest value in a list of arguments.
let mn=Math.min(2, 35, 68, 1, -555);
document.write(mn);
document.write("<br>")        //output= -555

//***************Math.max()**************************
// Math.max() returns the highest value in a list of arguments.
let mx=Math.max(2, 35, 68, 1, -555);
document.write(mx);
document.write("<br>")        //output= 68

//*************Math.random*****************************
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).
let ran=Math.random();
document.write(ran);        // Output: a random numbers
document.write("<br>")     //output=0.5677866748 or 0.37544745849 etc.

                           