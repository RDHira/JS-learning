// ****** Conditional Statement *************
const marks = 100

if ( marks > 140 ){
    console.log("Less than original marks");
}  
else {
    console.log("Greater than original marks");
}
//Output: Greater than original marks


// ***********Operators*********************************
// <, >, <=, >=, ==, !=, ===, !==(not equal)

// *********Scoping condition******************
const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);     //Output: User Power: fly
}
// console.log(`User power: ${power}`);     //Output: Error


// ***********************************
 const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");  // Bad consoling, should not put multiple console in one line 

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}


// ********Operator using in condition********************
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// AND Operator (&&)
//-> All conditon true not one
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");     //Output: Error
}

// OR Operator (||)
//-> One condition true or more
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");             //Output: User logged in
}  