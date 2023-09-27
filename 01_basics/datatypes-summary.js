/*.  Basically Datatype are categorise into two Parts  : Primitive and Non Primitive or Reference type

Memory mein data kaise 'Rakha' jata  hain aur unhe kaise 'access' kiya jata hai esi base pe categeoristion hua hai

Primitive ( reference type ): Call by value : jab aap data ko copy karte hain  kahi se to  aapko memory ka location nhi  diya jata aur jo aap changes karte ho o copy mein changes hote hain.
Reference (Non Primitive )


1.Primitive :

There are 7 types of primitive datatype
 1.String
 2.Number
 3.Boolean
 4.Null       : null means empty not means '0' or empty 'string'. Jab ham temper. ko server se lane ki baat
                kiya tha too o zero nhi tha o empty tha .
 5.Undefined  : Variable declare memory space declare hai but usme kya value aayegi ye decclare nhi hai.
 6.Symbol     : kisi bhi value ko unique banane ke liye 'symbol' ka use karte hai. Jb aap advance front-end 
                javascript karenge to oha par use hoga 
 7.BigInt     : Scintfic value ya bahut badi value ko store karne ke liye  use karte hain.*/

 const score = 100
 const scoreValue = 100.3 
// in javascript no number like float and double number is number here.

const isLoggedIn = false 
const outsideTemp = null

let userEmail; // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

// Value of 'Id' and 'anotherId' will not be same .

console.log(id === anotherId);

//const bigNumber = 234568563565495654978016n


 /*
 2.Reference (Non Primitive) :

 There are three Types 
 1. Array
 2.Objects
 3.Functions

 Note : Agar aap ko javascript master karna hai too app 'Objects' master kar lijiye aur jo web event or browser
        event hote use master kar lijiye.

 * JavaScript is a dynamically typed means that type of variable is not defined at compile time, rather at runtime.
*/

const heros = ["shaktiman", "naagraj", "doga"];

//Objects

const myObj =             // aap const ki jagah 'let' variable bhi use kar sakte hain
{
    name: "Adarsh",// objects curlybrases ke andar hee honge aur datatype kuch bhi ho sakta hai like Number , boolean , function , and another object , array 
    age : 22,
}

// Function 
/*  function ko aap javascript mein variable ki trah treat kar sakte ho

Definition of function is : function(){} */

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue );             // typeof outsideTemp is a 'Null' datatype but output : object
                                            //typeof bigNumber is a bigInt datatype but output : undefined
                                            //typeof scoreValue output : Number. which is right 
// 'typeof' is used to find the datatype


// Go to ECMAScript in 'typesof' oprator and learn it .

//https://tc39.es/ecma262/#sec-typeof-operator