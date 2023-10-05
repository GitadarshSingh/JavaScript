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

console.log(loginUserMessage("Adarsh")); // Output : Adarsh just logged in
console.log(loginUserMessage()); // Output : undefined