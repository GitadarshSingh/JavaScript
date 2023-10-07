// Basic sa object banate hain

const user = {
    username: "Adarsh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
     
      //  console.log(this); // 'this' talking about current value of varible on the other hand, we can says it talking about context.
    }
}


//$user.welcomeMessage()
//$user.username = "sam" // Here, we changes the context or values.
//$user.welcomeMessage()

//$console.log(this); // Output: {} => which means current context is empty.boz we are in node there is no context in 'global variable'

// In node IDE this value is empty but in browser's inspect value of 'this' is window.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Suppose under the child braces we print the console.log with 'this' then what will come let see


// 'this' means current context. it will used in the case of current context.
// Context : means simple values o kya hold kar rahe hain.
// Current context lies between the only big curlybraces or scopes.and outside the large braces there will no need.
// We uses 'this.username, this.price, this.welcomeMessage etc to in the case of current context.
// When we refer currrent contex then we use 'this' keyword.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// We are going to run the 'this' keyword in under the function.


function one() {
    let username = "Adarsh"
    console.log(this);
    //console.log(this.username); // Output: Undefined, boz this context only valid for 'object' case not valid in the case of 'functions'
 
}

one() 

//---------------------------------------------------------------------------------------------------------------------------------------


const two = function one() {
    let username = "Adarsh"
    console.log(this.username) // Output: Undefined

}   
 two()


//----------------------------------------------------------
//Lets talk about 'Arrow function'

// Bas 'function()' ke baad arrow laga dena hai and this is called arrow function. Let's see below


const two = () => {
    let username = "Adarsh"
    console.log(this.username) // Output: Undefined
    console.log(this); //Output: {} - Empty paranthesis

}   
 two() 



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Discussion on pure 'ARROW FUNCTION'

//Basic Example



const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4)); // Output: 7

//--------------------------------------------------------------------------------------------------------------------------------------------------

// Implicit Return 
// Implicit return: in this implicit return no need to use {} parenthsis
// Implicit ka mtb hai maan leta hun aapko likhne ki jaroort nhi hain. 

// Agar curlybraces use hua to 'return' likhna hee padega yadi agar paranthsis lagaya to 'return' keyword nhi likhna padega.

const addTwo = (num1, num2) =>  num1 + num2 // No need to write 'return'
console.log(addTwo(3, 4)) // Output : 7 

// OR

// Agar curlybraces use hua to 'return' likhna hee padega yadi agar paranthsis lagaya to 'return' keyword nhi likhna padega.

const addTwo = (num1, num2) =>  (num1 + num2) // No need to write 'return'

console.log(addTwo(3, 4)) // Output : 7 

//--------------------------------------------------------------------------------------------------------------------------------------


// Explicit Return

// Abhi tk aap number return kar rahe the maan lo aapko 'Objects' return karna hua, then

const addTwo = (num1, num2) =>  {username: "Adarsh"} //Output: undefined ,You can't run objects like this 

//  To run the object you need to raape the 'object' into the bracket.

const addTwo = (num1, num2) =>  ({username: "Adarsh"})

console.log(addTwo(3, 4));


//+++++++++++++++++++++++++++++ end ++++++++++++++++++++++++++++++++++++++




