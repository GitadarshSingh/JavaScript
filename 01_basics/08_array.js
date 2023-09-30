// array 

const myArr = [0 , 1, 2, 3, 4, 5] // --------- equation (1)

//$console.log(myArr["one"]); // jo first element hota hai uski indexing hoti hai zero se.
//myArr["one"] nhi likh sakte.

//$console.log(myArr["0"]); //correct

// Important Thing : many times In Interview.
// Jb bhi hum 'Array' mein copy operation karte hain too ye 'Shallow Copy' Banati hai
// Shallow Copy : like 'stack' https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

//$const myHeros = ["shaktiman", "naagraj"] // Ap es trah se Array declare kar skte ho.

// Ek traki aur hai Arry declare karne ka o neecha diya hai.
//const myArr2 = new Array(1, 2, 3, 4) // ye automatically square bracket add kardega.

//$console.log(myArr[1]); // yaha pe array '1' start ho raha hai .
 
// Array Methods

//Note : myArr.push() // '.push' add the value into the array. of 'myArr' or 'myHeros' in '.push' section.
myArr.push("8") // Output : [0,1,2,3,4,5,8]
myArr.push("10") // Output : [0,1,2,3,4,5,8]
console.log(myArr); 

//Similarly 

myHeros.push("Thor")
console.log(myHeros); // Output : [ 'shaktiman', 'naagraj', 'Thor]
// One more interesting thing

myArr.pop() //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(myArr); // Output: [ 0, 1, 2,3,4, 5, 8 , (10 is removed from here)]


//$myArr.unshift(9) // Elements to insert at the start of the array.
//$console.log(myArr); // Output : [ 9(9 is inserted here),0, 1, 2,3,4, 5, '8','10'] 
// insert krne par problem ye aai ki hame sare value ko shift karna pada mann lo 10 hazar value hoti to kitna pblm hota .
// time Consuming operstion aur computer pe load aa jata hai.

//$myArr.shift() //No parameters will give, Removes the first element from an array and returns it

console.log((myArr.includes(9)); //The element to search for. Output : false. boz 9 is not existing.
console.log((myArr.includes(3)); // Output : true. boz 9 is existing.

console.log(myArr.indexOf(19)); //indexOf(searchElement: number ). The value to locate in the array.Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// Interesting Operation and use many times.

const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log(myArr); //typeof : object , output : [ 0, 1, 2, 3, 4, 5 ]
console.log(typeof newArr); //typeof : String , Output: 0,1,2,3,4,5

//Important thing interview purpose
// slice , splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1); //output : A [ 0, 1, 2, 3, 4, 5 ]
                 //          [1, 2] : slice mein (1, 3)  tk range diya hai esme [1, 2] he print hua 
console.log("B", myArr); // Output :B [ 0, 1, 2, 3, 4, 5 ]
                             

// Ab jo result aayega ohi pe interview ke questions bante hai.


// We use splice for 'C'

const myn2 = myArr.splice(1,3)
console.log("C", myArr); // [ 1, 2, 3 ] same esme bhi range (1, 3) tk tha but esme [1, 2, 3] teeno print hua hai.

// Note : Ye bolna ki slip mein keol [1, 2] print hua hai aur splice mein [1, 2, 3] print hua hai, interviewer yahi par pat laga lega ki aap ko kuch nhi aat.
//Eske liye aap original array bhi execute karana hoga .
console.log(myn2); // Output : C [ 0, 4, 5 ]

// Correct Answer kya dekte hain ki 'B' jo slice hai usme se splice wala portion to nikal hee gaya hain.

//[0, 1, 2, 3, 4, 5, 6] mein se [1, 2, 3] nikal he gaya hain. so, C [0, 4, 5] correct output.