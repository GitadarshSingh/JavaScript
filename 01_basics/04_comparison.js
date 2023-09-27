//console.log(2 > 1 );
//console.log(2 < 1 );
//console.log(2 <= 1 );
//console.log(2 >= 1 );
//console.log(2 != 1 );


//console.log("2" > 1); // output : true
//console.log("02" > 0 ); // output : true

/* Reason :
jab es type ka comparison hota hai too predectiable result nhi aata  to kosis kariye ki data type same ho  Dekhoo String aur 
Number dono diffeent data type hai aur kosis kariye ki data type same ho .Suna hoga ki type script ek language hai aur o allow hee nhi 
karta ki app do different data type ko compare karo. 
 TYPESCRIPT : KUCH DIFFICULT RULE DETA HAI  KI AAP AISE KAIYE AUR ESA NA KARIYE */


console.log(null > 0 ); // output : false 
console.log(null == 0 ); // output : false 
console.log(null >= 0 ); // output : true . Esme JavaScript ne 'null' ko 0 mein convert kar diya hai.

//Kabhi Null ko NaN  mein convert karta hai aur kabhi 0 mein.

// Avoid to above type of Conversion.

/* equality operator ( == ) and greater than equal to (>=) dono ka 
javsscript mein kaam karne ka tarika todha different hot hai.

Comparison convert null to a number it as 0. That's why (3) null >= 0 is true and (1) null >0 is false .*/

console.log(undefined == 0 ); // Output : False     
console.log(undefined > 0 );  // output : Fals   
console.log(undefined < 0 );  // output : False

// NOTE : Avoid to this type of Conversion .

/* In JavaScript Comparison check and Equality Check both are different things 
Double Equal (==) and Triple Equal (===) both have different working syntax and less than equal to , greater than equal to have different Syntax*/

// triple equality (===). Strict Check Means to check with triple equal
 
// === check not only value it checks also its data type

console.log("2" === 2 );