// *******************************
let index = 0
while (index <= 10) {
    console.log(`Value of index is ${index}`);   //Output: 0, 2, 4, 6, 8, 10
    index = index + 2
}

// ***** while loop *********
let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);    //Output: flash, batman, superman
    arr = arr + 1
}
 
// ***** do while loop *******
let score = 10
do {
    console.log(`Score is ${score}`);         //Output: 10
    score++
} while (score <= 10);