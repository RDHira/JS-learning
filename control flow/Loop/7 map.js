const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10})
console.log(newNums);

//******** Chaining Map Method***************
const Numers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fNums = Numers
                .map((num) => num * 10 )      //Output: 10,20,30,40,50,60,70,80,90,100 (final nums)
                .map( (num) => num + 1)       // Output: 11,21,31,41,51,61,71,81,91,101 (final nums+1=new num)
                .filter( (num) => num >= 40)  // Output: 41,51,61,71,81,91,101 (new num>=40 =filter nums)

console.log(fNums);