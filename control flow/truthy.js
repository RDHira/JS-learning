const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");        
}                                            //Output: Got user email

// ***************************************************
/* Truthy values in js:
 true, "0", 'false', " ", [], {}, function(){}, false==0, false=='', 0==''    */

 /* Falsy values in js:
 false, 0, -0, BigInt 0n, "", null, undefined, NaN     */


//** For check Array empty
 const isEmail = []
if (isEmail.length === 0) {
    console.log("Array is empty");      //Output: Array is empty
}

// For check Object empty
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");        //Output: Object is empty
}


// *************************************************************
// Nullish Coalescing Operator (??):  (vvi)
/*-> The Nullish Coalescing Operator (??) is a relatively new addition to JavaScript introduced in ECMAScript 2020. 
  ->It provides a concise way to handle default values for cases where a variable is null or undefined, 
    without considering other falsy values such as empty strings(""), zero, or false.*/
//Mostly used in: null and undefined

let value;
// value = 5 ?? 10             //Output: 5
// value = null ?? 10          //Output: 10   (null not optional value print, it mostly used in rewrite the coding)
// value = undefined ?? 15     //Output: 15   (undefined not optional value print)
value = null ?? 10 ?? 20       //Output: 10  (Print minimum value at first, then other)
console.log(value);




// Terniary Operator
//Syntax:
// condition ? true : false

const Price = 100
Price <= 80 ? console.log("less than 80") : console.log("more than 80") 

//Output: more than 80