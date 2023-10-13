// Phale pur code execute hota tha par ab hum ye chayate hain ki 'login' karne par dusra code run ho aur 'logout' karne par dusra code run ho.
// esi ko bolte hain 'control flow' ya logic flow
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// First Control Flow

// if- else


/*
if (2 == "2") {
    console.log("executed") // Output : Executed boz '2' datatype aur "2" string datatype.
    
}
*/
/*
if (2 === "2") {
    console.log("executed") // Output : no output will come.

}*/
/*
if (2 != 3) {
    console.log("executed") // Output : no output will come.

}*/

// < , >, <=, '==' (compare value equal or not), '=' (assigning the value), !=, '===' (also check the datatype), !==

/*const isUserloggedIn = true
const temperature = 41

if ( temperature < 50 ) {
    console.log("less than 50");
}
console.log("temperature is greater than 50"); // Output :less than 50 and temperature is greater than 50
*/
/*
const temperature = 41

if ( temperature === 41 ) {
    console.log("less than 50");
}
console.log("temperature is greater than 50");  // Output : Same less than 50 and temperature is greater than 50
*/
// to solve this problem we use 'else' statement

const temperature = 41

if ( temperature == 41 ) {
    console.log("less than 50");
}
else{
    console.log("temperature is greater than 50");
}// Output : less than 50


/*
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`); */

//Short hand notation
// To check the balance less than 1000.
 
const balance = 1000

//if (balance >  500) console.log("test");/* {  } sometime we do not use this scope called implicit scope */
/*if (balance >  500) console.log("test"), :  At the place of semiclon(;) we use commma(,) it is very immature code don't do this need to use semicolon(;)
    console.log("test2"); */

//if (balance >  500) console.log("test"),console.log("test2"); // Again it is a very immature code  use semicolon at the place of comma(,)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// About Nesting
/*
if (balance < 500) {
    console.log("less than");

}else if (balance < 750) {
    console.log("less than");

}else if (balance < 1200) {
    console.log("less than 1200"); // Output : less than 1200
}*/

// Real life uses of nested if-else case

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

/*
if (userloggedIn && debitCard ) {
    console.log("Allow to buy course");
} //  Output : Allow to buy course


if (userloggedIn && debitCard && 2==2 ) {
    console.log("Allow to buy course");
} // Output = Allow to buy course
*/


/*
if (userloggedIn && debitCard && 2==3 ) {
    console.log("Allow to buy course");
} // Output = no output will come boz  one we write wrong*/


if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
} // Output : User logged in