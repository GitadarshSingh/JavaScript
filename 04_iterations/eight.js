// Reduse.js
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const myNums = [1, 2, 3]


//const myTotal = myNums.reduce(function (acc, currval){
//    return acc + currval
//}, 0)

//console.log(myTotal); // Output: 6

// Where, acc = accumulator , currval = current value




//const myTotal = myNums.reduce(function (acc, currval){
//    console.log(`acc: ${acc} and currval: ${currval}`);
//    return acc + currval
//}, 3)
//console.log(myTotal);
// Output : acc: 3 and currval: 1   : given, current value = 1, accu = 3 => 3+1 =4 .
         // acc: 4 and currval: 2   : similarly, currval = 2 , acc = 4 => 4+2 =6
         // acc: 6 and currval: 3   : currval: 3 , acc: 6
        // 9 : 6 +3 = 9


// How to write above into arrrow function 

//const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
//
//console.log(myTotal); // Output: 6

// Example : Shoppingcart to buy course

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
 console.log(priceToPay); // Output : 22996