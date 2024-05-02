// *******toLocaleString()************
const num =10000000
console.log(num.toLocaleString());      //Output: 10,000,000
console.log(num.toLocaleString('en-IN')); //Output: 1,00,00,000
console.log(num.toLocaleString('en-NP'));  //Output: 10,000,000


// ********toPrecision()**************
let score =323.43554
console.log(score.toPrecision(2)); //output: 3.2e+2
console.log(score.toPrecision(3)); //output: 323
console.log(score.toPrecision(4)); //output: 323.4

// *****toFixed()*************
let fixNum =200.765756
console.log(fixNum.toFixed());  //output: 201
console.log(fixNum.toFixed(0));  //output: 201
console.log(fixNum.toFixed(1));  //output: 200.8
console.log(fixNum.toFixed(2));  //output: 200.77
console.log(fixNum.toFixed(3));  //output: 200.766







