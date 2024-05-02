// ************Array*********************
// const Arr =['Apple', 'Mango', 'Banana']
// console.log(Arr[1]);            //Output: Mango

// const myArr=[1, 2, "Ram", true, 5]
// console.log(myArr[2]);               //Output: Ram

// const Ary =new Array(1,2,3,4,5)
// console.log(Ary[3]);            //Output: 4


// ******Array_Method************************
// const ArrMe =[1, 2, 3, 4, 5]
// ArrMe.push(9);   //output: [ 1, 2, 3, 4, 5, 9 ]
// ArrMe.pop();    //output: [ 1, 2, 3, 4, 5 ]
// ArrMe.unshift(9);   //output:  [ 9, 1, 2, 3, 4, 5 ]
//ArrMe.shift();   //output:  [ 2, 3, 4, 5 ]
// console.log(ArrMe);

//console.log(ArrMe.includes(9)) //Output: False
//console.log(ArrMe.indexOf(3)) //Output: index value: 2

//const newArr =ArrMe.join();
//console.log(newArr);          //Output: 1, 2, 3, 4, 5
//console.log(typeof newArr);   //Output: string typeof



// ********** Slice() and splice()***********************
const SlArr =["a", "b", "c", "d", "e"]
const myslArr =SlArr.slice(1, 3);      
const myspArr =SlArr.splice(1, 3);
console.log(myslArr);             //output: [ "b", "c" ] -> 1st index include & last not include
console.log(myspArr);             //output: [ "b", "c", "d" ] ->
console.log(SlArr);




/********Array_slice()**********************/
//The slice() method can take two arguments like slice(start, end).
let slArr=["Sann","Jonn","Panny","Binek","Topen"];
console.log(slArr);
let sl=slArr.slice(1 , 4);   //"1" is Start and "4" is End
console.log(sl);

//******Array_splice()*********************************/
//The splice() method returns an array with the deleted items:
console.log(slArr);
let spl=slArr.splice(2, 0, "Lemon", "Kiwi");
console.log(spl);

//*********isArray()*********************************/
//output=error, it's mistake:
let isA=["Sann","Jonn","Panny","Binek"];
console.log(isA);
let iA=Array.isArray();
console.log(iA);

//*********indexOf()*********************************/
//output=error, it's mistake:
let inA=["Sann","Jonn","Panny","Binek"];
console.log(inA);
let inArr=inA.indexOf("Jonn");
console.log(inArr);

//***********Flat()********************************/
//It generates many array inside arrays into one single array
const mixed_array=[1,2,3,[4,5,6],[7,8,[5,9,3]]];
const real_array=mixed_array.flat(Infinity);
console.log(real_array);

//**************isArray()*****************************/
console.log(Array.isArray("Hiralal"))
console.log(Array.from("Hiralal"))
console.log(Array.from({name: "hiralal"}));
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

