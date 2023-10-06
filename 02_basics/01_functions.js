//function: function keyword
//sayMyName: function Name 
//fuction sayMyName(){ } : fuction syntax

function sayMyName(){
    console.log("A");
    console.log("d");
    console.log("r");
    console.log("s");
    console.log("h");
    
} // Is called definition of functions

// function ko jitni baar call krani hai utni baar 'sayMyName' likhna padega bas.
// sayMyName: reference of function . if want to execute then use 
// sayMyName() : called is execution.

//$sayMyName() // Output : A  d  a  r  s  h 

/*
function addTwoNumbers(number1, number2){
   // number1 + number2
   console.log(number1 + number2);
}*/

// (number1, number2) : called Parameters
// (3, 4) : called Arguments
//addTwoNumbers() // Output: Nan means not an number boz no argument i have passed.

//$addTwoNumbers(3, 4) // Output : 7


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function addTwoNumbers(number1, number2){
    
    /*let result = number1 + number2
    console.log("Adarsh"); // It is above the return result this causes it will print .
    return result
    //console.log(number1 + number2); : reson why i comment this console.log in line number 45

    console.log("Adarsh"); // return result ke neeche kuch bhi print nhi hoga but return result ke above everythings will print.

    */ // One more shortcut way to return the value

    return number1 + number2
}

//$const result = addTwoNumbers(3, 5) // Output 3+5 = 8

//console.log("Result:",result); //  Output : result = undefined , lets see why boz u need to remove the console.log in 'functions' then result will execute.

//'===' is just for equal

function loginUserMessage(username){

    if(!username){     // check the value is present or not.

    //Or
    
    //if(username === undefined or this if(username === undefined)) both are same things.


        console.log("Please enter a username");
        return
    } // Want to below line does not run then we use 'return'
    return `${username} just logged in`
}

//loginUserMessage("Adarsh") : No output will come

//$console.log(loginUserMessage("Adarsh")); // Output : Adarsh just logged in
//$console.log(loginUserMessage()); // Output : undefined



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Aage ek common situation aayegi jisme aap ko aage ja kar kux 'projects'banayenge jisme ek 'shopping cart' hoga jaise aap e-commerce application banayenge.
// Shopping Cart : mein user added kiye hee jata hain saaman jaise aapko pata nhi hai kitne no. aate hain. aapko sirf sabke price add karte hue jate hain. too
// aise situation kafi common hote hain.

// Suppose we have a function.

function calculateCartPrice(num1){
   return num1
}

//$calculateCartPrice(2)
//$console.log(calculateCartPrice(2)); // output : 2


// Suppose aapke csrt mein kafi values aagi jinko aapko add akrna hain

//$console.log(calculateCartPrice(200, 400, 500)); // Output : 200

/* Aise kafi common situation hoti jisme aapko first num1 price milgai 200 but baki ka kya
=> Esko solve karne ke liye rest opertor hota hain ('...' this three dot also know as 'rest and spread' operator both ) but depend upon the use case 
when we says rest and when we says spread operator. */

// ... Rest : rest ka mtb hain above 200, 400, 500 teeno ko ek ;'bundle mein pack karo aur mujhe de doo.

function calculateCartPrice(...num1){
    return num1
}

//$console.log(calculateCartPrice(200, 400, 500)); // Output: [ 200, 400, 500 ]
// Abhi maine tino values ko array mein band kar liya so don't worry loop laga kar add kar dunga.
//Aur en parameters mein aap kux bhi de sakte hai like (200, 400, 500, 2000, 100000,......so on) ye sare values ja kar array mein add ho gayenge
 

/* Ek aur concept hota hain */

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
//$console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [ 500, 2000 ]

// So basically esme ye hua hai ki (200 goes in 'val1' , 400 goes in 'val2' and remaining 500 ,2000 goes in ...num1)

// We alredy discussed about 'objects' in previous lectures but here need to know something about 'objects'

//So
 const user = {
    username: "Adarsh",
    prices: 199
}
// Now humne object bana liye but es object ko function mein kaise pass kiya jata or use kiya jata.

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is
    ${anyobject.price}`);
}
// Call function and compulsary to pass the object

handleObject(user) // Output: Username is Adarsh and price is 199


// in function we changes the price to prices in user the our output of price will 'undefined'
// If you handle the object then need to check the typesafety ki jo price main extract kar raha hun actually meain ho hai ya nhi.


//     Or we can do one moe thing 
handleObject({
    username: "Birjesh",
    price: 399
})
// Output: Username is Birjesh and price is 399

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 const myNewArray = [200, 400, 100, 600]

 function returnSecondValue(getArray){
    return getArray[0]   // Output: 200
    //return getArray[1]  // output: 400
    //return getArray[2] // Output:100
    //return getArray[3]   // oUtput: 600
}

//$console.log(returnSecondValue(myNewArray)); 
console.log(returnSecondValue([100, 400, 500, 1000])); /// Output: 100