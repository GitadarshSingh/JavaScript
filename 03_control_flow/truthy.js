// Concept of truthy value and falsy value
// Suppose aapne 'database' se quarry kiya aur bola 'Email' bato

const userEmail = "A@adarsh.ai"

if (userEmail) {
    console.log("Got the user email");
}else {
    console.log("Don't have user email");
}
// Output : Got the user emal : behind the scene maan liya hain ki 'userEmail' ki value 'string' hain or valur true hain



const userEmail = " "

if (userEmail) {
    console.log("Got the user email");
}else {
    console.log("Don't have user email");
}
// Output : Got the user email boz there is a gap btween string's double quote



const userEmail = ""

if (userEmail) {
    console.log("Got the user email");
}else {
    console.log("Don't have user email");
}
// Output : user don't have mail boz there is no gap btween string's double coute("")


const userEmail = []

if (userEmail) {
    console.log("Got the user email");
}else {
    console.log("Don't have user email");
} // Output :Got the user email boz empty array hain too maan liya gaya hai ki true hain



// falsy values or false values

//false, 0, -0, BigInt , "", null, undefined, NaN, 0n

// truthy values or truth values
//"0", 'false', " ", [], {}, function(){}

// Method to check array

if (userEmail.length ===0 ) {
    console.log("Array is empty");
}
 // How to check it into conditions

// If objects come in js

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} // OUtput: Object is empty

// Go to console and check 
//false == 0 is true
// false == "" is true
// 0 == "" is true 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish Coalescing Operator (??): null undefined

let val1;
//val1 = 5 ?? 10  // Output : 5
//val1 = null ?? 10 // output :10
//val1 = undefined ?? 15 // Output : 15
val1 = null ?? 10 ?? 20 // Output :10 jo bhi first value milegi ohi assign ho jati hain






console.log(val1); //  Output: 5
// what is the sence this operator (??) jb first value 5 hee jani thi boz kai baar kya hota hai jab aap database se call karte hain or jab aap firebase use karte hain 
//too aapko directly response nhi milte oha aapko 2 values milte hain too uss time kya hota hain aap ke pass null response aa jaye or response aaye hee na too uss case 
//mein aapka pura course structure paresan ho sakta hain too uss cases ke liye banaya gaya hain specially database mein aap aage ja kar padhenge.

// Nullish Coalescing Operator (??) and Terniary operator are two different thing

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ?  console.log("less than 80") : console.log("more than 80");;
// Output : more than 80









