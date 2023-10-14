// for of

// Array specific loop 
// Array and objects are very powerful in js

/// Common Situation

//["", "", ""]
//[{}, {}, {}]

const arr =  [1, 2, 3, 4, 5]

// for of loop : syntax

//for (const iterator of object) {
    
//}

for (const num of arr) {
    ///console.log(num);
} // Output : 1 to 5

// App esko string pe bhi laga skte hain.
const greetings = "hello world!"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

// One more DataType

// Map

// Maps : is a object 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


const map = new Map()
map.set('IN', "India")
map.set('IN', "India") // Map does't repeat value again
map.set('USA', "United State Of America")
map.set('FR', "France")

//console.log(map);
/*
for (const key of map) {
    console.log(key);
}*/

/*
for (const [key, value] of map) {
    console.log(key, ':-', value);
}
*/


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}


/*
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
} // Output:  myObject is not iterable
*/
// for loop does not work here







