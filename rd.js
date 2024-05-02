// ##### Control Flow ########
// ****** 1) Conditional Statements *********
// +++++ First Example +++++++
const marks = 550;
if(marks>=600){
    console.log("You are passed");
}
else{
    console.log("You are Failed");
}                                     //Output: You are Failed

// +++Scoping condition +++++
const mark1 = 100
if(mark1>200){
    let power ="She can beat the Principal:"
    console.log(`Today News: ${power}`);
 } else{
     console.log(`Otherwise, she can be beaten by Principal. `);
    }
                                     
//++++ Argument Passing ++++++
const score = 1000;
function add(num){
   if (score>num) {
     console.log("The score is greater than number.");
   }
   else if(score===num){
    console.log("The Score is equal to the Number");
   }
   else{
    console.log("The score is less than number");
   }
}
(add(1000));


// ++++++++ AND Operator (&&) +++++++++++++++++++++
const fName =true
const address =true
const loginEmail =true
const password =false
if (fName && address && password) {
     console.log("One condition is false:")  //Output: One condition is false (Password is false)
}
// ++++++++++++++++
if(2==2 && 3==3 && "4"=="4"){
    console.log("All are true:")  //Output: All are true: (conditions are true)
}

// ++++ OR Operator (||) ++++++
if(loginEmail || password){
    console.log("welcome in OR operator");  //Output: welcome in OR Operator (Here, one ture and other false)
}
// ++++++++++++++++
if(2==2 || 5==7){
    console.log("Again, welcome");   //Output: Again, welcome
}

// ++++++  NOT Operator (!) ++++++++
if(!password){
    console.log("Password is not true.")  //Output:Password is not true.(here, password is false but NOT Operator made true)
}
// ++++++++++++++++++++
if(!fName){
    console.log("My name is rd.")  //Output: Error (fName is true but NOT operator Made false)
}
// ++++++++++++++++++++++
if(!(2==2)){
    console.log("Print me")      //Output: Error 
}