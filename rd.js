// ##### Control Flow ########
// ****** 1) Conditional Statements **********
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