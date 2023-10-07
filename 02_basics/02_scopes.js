
let a = 10 
const b = 20 
var c = 30

console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(c); //Output: 30


// Jb 'var' tha too 'let aur const' ko kyu lana pada. boz Hmra jo blocks hai jo ki hona chaiye thee uski trah kaam nhi kar rha tha.

/* {} => this curlybraces also known as scopes in every programming languages. Ye curlybraces aap ko 'function, if-else and Objects' mein bhi dikha tha aur ye aapko kafi 
aur jagah dikhega.
Objects: mein bhi aapko dikhega but aap usse galat mat samajyega kyuki oo 'object declaration' ke liye tha
Jb curlybraces if-else , function ke ssath aata hai too usse 'scope' bolte hain of that programming */

//var c = 300

let a = 300

if (true) {
    let a = 10 
    const b = 20  
    var c = 30   
   console.log("INNER: ",a);
}

console.log(a); // Output: a is not defined boz i'm declared the 'a' inside the scope. aur 'a' bahar nhi aa sakta
console.log(b); // Output: b is not defined boz i'm declared the 'b' inside the scope. aur 'b' bahar nhi aa sakte.
console.log(c); //Output:  30

/* Suppose Anyother programmer decalre the 'var c= 300' outside the the scope in line no.19 OUTPUT: 30. So, programmer paresan hojayega ki maine var c= 300 too output 30 kyu aa rha.
In line 24 'var c = 30' ki jagah only ' c = 30' likhte tb bhi pblm same aati. esiliye programmers avoidin to use 'var' variable. */

// Global Scope : Declare outside the scope. but data declare outside the scope it will go under the scope block.
// Block Scope : Declare inside the scope. but data declare inside the block don't go outside 

// In code environment 'scope' runs through are totally different from 'scopes' runs through browser 'inspects'

// Next slide function under function