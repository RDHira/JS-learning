//*** Reduce ****************
//Syntax:
/*const Arr =[1,2,3,4,5]
   const InitialValue = 0
   const FinalArr = Arr.reduce( (accumulator, currentValue) => accumulator + currentValue, InitialValue);
   console.log(FinalArr);     
                                           //Output: 15
   */

//***** Example******
const myNums = [1, 2, 3]
const Total = myNums.reduce(function (acc, currval) {
   console.log(`acc: ${acc} and currval: ${currval}`);
   return acc + currval
}, 0)
console.log(Total);           //Output: 6

//***** In Arrow function*****
const Nums = [1, 2, 3]
const myTotal = Nums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);              //Output: 6

//*** In Shoping Cart**********************
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);           //Output: 22996