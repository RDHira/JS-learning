function sum(a,b){
   console.log(a+b);
}
sum(3,5);

// ************************************
function add(num1,num2){
    return num1+num2
}
console.log(add(3,3));

// ****************************************
function sum1(num3,num4){
    let result= num3+num4
    return result
}
let result=sum1(6,6)
console.log("Result:",result)

// ************User Passing arguments or not******************************
function login(username){
    return `${username} just logged in`
}
console.log(login("Rahul"))  //output: Rahul just logged in

// ----user not pass the arguments---------
console.log(login())    //output: undefined just logged in 

//********Check
// const myArr =[200,400,500,600]
// function handle(anyobject) {
    
    
// }


// ######### Scope Variables ###############
//-> Var doesn't follow the Scope rule but let and const follow the rule
//So, Most Programers are used scope base variables let and const because its follow Scope rules
//Decrease the programminng errors or bugs.

// ***********Global and Local Scope in function ********
//--> { } curly bracket is an SCOPE.
//->Scope determines the accessibility (visibility) of variables.
// Three Types of scopes:
// Local Scope: "Variables declared within a JavaScript function, are LOCAL to the function:"
// 1.Block scope: "Variables declared inside a { } block cannot be accessed from outside the block"
// 2.Function scope: "Variables declared with var, let and const are quite similar when declared inside a function."
// 3.Global scope: "A variable declared outside a function, becomes GLOBAL."

//--Var not follow scope rule---
if(true){
        const a = 50
        let b = 20
        var c = 10
}
// console.log(a);  //Output: Error (Out of scope)
//console.log(b);    //Output: Error (Out of scope)
console.log(c);    //Output: 10  (Here, var doesn't follow scope rule, that is the bug)

//--Var Variable has scoping bug---
var c = 600
if(true){
    var c = 100
}
console.log(c)    //Output: 100 (here,var print value inside the scope )


// ---Block Scope (function Scope)--------
if(true){
    const x = 500
    let y = 200
    var z = 100
    console.log("Block scope Value:",x);   //Output: 500
    console.log("Block scope Value:",y);   //Output: 200
    console.log("Block scope Value:",z);   //Output: 100
}

// ---Global Scope----
const x = 3000
let y = 2000
if(true){
    const x = 100
    let y = 50
}
    console.log("Global Value:",x);   //Output: 3000  (global scope print value out of scope so x=3000)
    console.log("Global Value:",y);   //Output: 2000  (global scope print value out of scope so y=2000)


// **************************************
// ---Nested function-------
// -> Function inside function 
function one(){
    const username = "Hritik"
    function two(){
        const age = 20
        console.log(username);    //Output: Hritik (Because inside the scope from function two)
    }
    // console.log(age);   Output: Error  (Out of scope from function two)
    two()
}
one()


// ---if / else-----
if(true){
    const user ="Rahul"
    if(user==="Rahul"){
        const channel = " Blog"
        console.log(user+channel);   //Output: Rahul Blog  (Print inside the scope)
    }
    // console.log(channel);  //Output: Error (Out of Scope)
}
// console.log(user);       //Output: Error (Out of Scope)


// ---Declaration of function (Hoisting)-------
// #1st Method
function addOne(num){
    return num + 1
}
console.log(addOne(5));     //Outout: 6

// ++Argument initialize before function++++
console.log(addOne(5));     //Outout: 6
function addOne(num){
    return num + 1
}


// #2nd Method
const addTwo =function(num){
    return num + 2
}
console.log(addTwo(5))  //output: 7

// ++Argument initialize before function++++
//console.log(adddTwo(5))   //Output: Error (Cannot access 'adddTwo' before initialization)
const adddTwo =function(num){
    return num + 2
}


// **** "this" keyword and "Arrow function" in js*******(VVI)
// ->"this" keyword creates current contaist or Values.
const user ={
    username: "Hariharan",
    profesion: "Singer",
    song: "tu hi re...",
    welcomeMessage:function(){
        console.log(`${this.username} welcome to the studio`)
        //console.log(this);  //Output: Here, every values are prints and display.
    }
}
user.welcomeMessage()       //Output: Hariharan welcome to the studio
user.username= "Master Saleem"  //here, contaist change Hariharan to Master Saleem
user.welcomeMessage()     //Output: Master Saleem welcome to the studio

console.log(this);  //Output: {} (here, Global object is empty in outside of the browser environment. )


/* ## Note: In the past, JavaScript programs ran within the browser engine, but nowadays, 
outside of the browser environment, various platforms like Node.js, Deno.js, Bun.js facilitate its execution.*/

// ## Global object in browser is: "Window object"


// Question:"We can use this keyword in Arrow function or not?"
//->We can't use this keyword in Arrow function because arrow functions do not have their own this context.
//Example:
//In simple function
const obj = {
  name: "John",
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },
  //In Arrow function
  greetArrow: () => {
    console.log(`Hello, ${this.name}!`);
  }
};
obj.greet(); // Output: Hello, John!
obj.greetArrow(); // Output: Hello, undefined! (or whatever value this has in the outer scope)




// *****Arrow Function =>**************************
//--> Basic Syntax of Arrow function is:  () => {}
// #1st method:
const sumTwo = (num1,num2) =>{
       return num1+num2
}
console.log(sumTwo(5,5));   //Output: 10

// #2nd method:
// Implicite Return
const sum2 = (num1,num2) => num1 + num2
console.log(sum2(6,6))      //Output: 12

// #3rd method:
// This technique mostly used in react.
const sum3 = (num1,num2) => (num1 + num2)
console.log(sum2(7,7))      //Output: 14


//#4rth method:
// For object return in arrow function
const sum4 = (num1,num2) => ({username:"Rahul"})
console.log(sum4());     //Output: { username: 'Rahul' }



// ************ Immediately Invoked Function Expression (IIFE) ***************
// Q. Why it is used:
//->Prevents variable pollution in the global scope.
//->Creates private variables and functions.
//->Executes code immediately upon script loading.
//->Prevents hoisting-related bugs.
// example:
(function iife(){
    console.log(`DB CONNECTED FIRST`);
})();    //first iife end by ; semicolon

// -->When write More than Two iife function then end/terminate first iife function by (;) Semicolon.

(function iife(){
        //It is named iife
    console.log(`DB CONNECTED SECOND`);
})();



// **Write in Arrow function****
( () => {
    // It is simple iife
    console.log(`DB CONNECTED TOO`);
})();

//********Arrgument Pass********************* */
( (user) => {
    // It is simple iife
    console.log(`DB CONNECTED TOO: ${user}`);
})("RONNY");


// // ******Combine two iife ************
(() => {
    console.log("first iife");
}) (); //here ;(semi-colon terminate the function)

( () => {
    console.log("Second iife");
}) ()

