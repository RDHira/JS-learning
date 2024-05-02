//const Id = 144553
//Id = 555555 
//console.log(Id)   //It is not allowed, we can't declare const again again


let fName = "Rahul"
fName = "Yadav"
//console.log(fName);  // It is allowed to print last variable value =Yadav

 
var Class = 10
Class = 8
//console.log(Class);  // It is allowed to print last variable value Class=8

let Courses;

//Prefer not to use var, because of issue in block scope and functional scope
// We use Only const and let.


console.table([fName, Class, Courses]);


