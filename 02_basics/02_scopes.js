
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

var c = 300

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




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Lets talk about Nested Scope

function one(){
    const username = "Adarsh"

    function two(){
        const website = "youtube"
        console.log(username);
        two()       // Console username boz we want to know that can we excess the username from other function.
    }
    //console.log(website); // Does't execute because it is outside 'function two' scope.
                // line by line execution hota hai console.log ne error de diya esliye two() execute nhi hua.
    two()  // not execute
}
one() Output: Adarsh

// Suppose: function one => big scope  , function two => small scope
// Small scope, big scope ke function execute kara sakta hai but big scope small scope ko execute nhi kara sakta.
// Jaise chota baacha badaa insaan ki icecream le sakta hai but badaa insaan chote bacche ka icecream nhi le sakta.

// Error se sikhte hain jitna zada familiar honge unti aachi aapki programming hogi


if (true) {
    const username = "Adarsh"

    if (username === "Adarsh") {

        const website = " youtube"
        console.log(username + website); // OUtput:Adarshyoutube

    }

    //console.log(website); // does't excess boz website declare in child scope and child scope lies from line no. 76 to 81.
}

//console.log(username);//Output :  username is not defined boz outside the username scope or parents scope.


//++++++++++++++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.

addone(5) // No error 
function addone(num){
    return num + 1
}

//addone(5)
//console.log(addone(5)); // Output:6

/*----------------------------------------------------------------------------------------------------------------------------------------------------------
 We can declare functions in both sequeance above and below.
 In below to store the function in a variable with name 'const addTwo'
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

// 2.

addTwo(5)// Error: Cannot access 'addTwo' before initialization. this i sdepend upon how function you are writing.
const addTwo = function(num){
    return num + 2
}

//addTwo(5)

//  in line no. 93 there is no error and with same concept in line no. 108 there is error this is due to function declarization
// Further we discussed about hoesting and execution context.