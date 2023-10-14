const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


//myNumbers.map( (num) => num + 10)
//console.log(newnum); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 10 is not adding in it.


//const newnum = myNumbers.map( (num) => num + 10)
//console.log(newnum);  // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


//let newnum = myNumbers.map( (num) => {num + 10})
//console.log(newnum); // Output: [
                            //    undefined, undefined,
                            //    undefined, undefined,
                            //    undefined, undefined,
                            //    undefined, undefined,
                            //    undefined, undefined
                            //  ]         : boz you are not written 'return' keyword.

//const newNum = myNumbers.map( (num) =>  {return num + 10})
//console.log(newNum);  // // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
 
                            
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  Chaining : 2 or 3 method aap ek saath use kar sakte hain.

const newNums = myNumbers
                        .map( (num) => num * 10 )
                        .map ( (num) => num + 1)
                        .filter( (num) => num > 40 ) 
console.log(newNums);    
 // Output: [
                                 //    11, 21, 31, 41,  51,
                                 //    61, 71, 81, 91, 101
                                 //  ]
                            








