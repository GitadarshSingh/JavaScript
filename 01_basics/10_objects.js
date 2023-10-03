/* There are two methods to declare the objects 
 1. Literals ,  2. Constructors

Yaha pe ek concept aat hain 'singelton' ka.
Singeltion : means koi bhi constructor se banate hain to 1 he object banta hain.
Aur jab dushri trike se banate hain to o singelton nhi rah jata. multiple ho jata hain.

Literals ki trah declare karta hun to 'singelton' nhi banta hain.
Constructors se banega to hamesa 'singelton' hee banega. */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//Basically, now we are going to talk about literals
// object literals Declare a object

// Note : Object ke 'andar' keys aur 'Values' ka chakar hota hain

//Object.create -- Called is constructor

// const JsUser{} -- Method to declare 'object'. Now basically it is a empty object.

//Suppose we want to declare a symbol.
const mySym = Symbol("key1")
// How to use symbol as a key ? --- Many times asked in Interview
// First you need to declare 'mySym' in Objects,

const JsUser = {
    name: "Adarsh",   // Basically name is a string it understand
    "full name": "Adarsh Singh", // There is no chance to excess the value by '.'

    /*mySym: "mykey1", //  Output = mykey1, but we see 'typeof' of mySym is not use as a symbol.
    // it is not proper syntax to declare 'mySym'*/
    [mySym]: "mykey1", // It a proper syntax.
    age: 21,
    location: "Noida",
    email: "adarsh@google.com",
    isLoogedIn: false,
    lastLogindays: ["Monday", "Saturday"]
} 
// Comma is must.
//name, age, location, age, location, email, isLoggedIn, lastLogined all are strings.

// How to excess 'user'
//console.log(JsUser.email) // It is not a proper way to excess object. Basically it is a wrong way but avoid to do this. 
//$console.log(JsUser["email"]); // It is a proper to excess th object.

//console.log(JsUser.full name);// There is no chance acess 'full name' like this. Double coute of syntax is not allowed here.
// So only one mode are remaining to excess this that is through square bracket.
//$console.log(JsUser["full name"]);
//console.log(typeof JsUser.mySym); // typeof is 'string'

//$console.log(JsUser[mySym]); 

// Suppose we want to change it 'email'

JsUser.email = "Adarsh@chatgpt.com"

//Suppose we don't want to change the 'email' then

//$Object.freeze(JsUser) // Object on which to lock the attributes.

JsUser.email = "Adarsh@microsoft.com"
//$console.log(JsUser);

// We are going to add the function in objects
// In javascript there is no discrimination with 'function' we can declare it as a variables.

// Sppose we want to add greeting in 'JsUser'
JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // Backstick JS intepulation
}
// Going to excess
// There is two type to excess the 'greeting' First is = greeting & is greeting()
// let is what is the difference

console.log(JsUser.greeting());
// How to make greetong as a functon
console.log(JsUser.greetingTwo());

// In Majority Case you need to excess value though dot or'.' in some case you need to Sqr Bracket . 



