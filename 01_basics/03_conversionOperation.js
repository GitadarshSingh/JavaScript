let score = "33abc" //let dectare variable Suppose we are play a game like Pokeymonn etc
 // Suppose we need to find 'type' although we know that but somewhere we worked at back end.

 //console.log(typeof score)
 //console.log(typeof(score)) // 'Score' under Paranthesis is same as above one 'score'

 //Suppose Our value came in 'String' and we want to do operation on Numbers
 // So  we can declare new variable
 // Note : 'let' is a Variable 

 // We converted the number

 //$let valueInNumber = Number(score)
 //console.log(typeof valueInNumber);
 //console.log(valueInNumber);

 //"33" => 33
 //"33abc" => NaN
 //true => 1 ; false =>0

 //$let  isLoggedIn = 1

 // We converted into boolean

 let booleanIsLoggedIn = Boolean(isLoggedIn);
 console.log(booleanIsLoggedIn);


 // 1 => true; 0 => false
 //"" => false
 //"Adarsh" => true
  

 // We can also convert in 'String'

 //let someNumber = 33

 //let stringNumber = String(someNumber)
 //console.log(stringNumber);

 //console.log(typeof stringNumber);


//**********************************************************Operations******************************************************************

//$let value = 3
//$let negValue = -value

//console.log(negValue);


//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2**2);
//console.log(2/2);
//console.log(2%2);

let str1 = "Hello"
let str2 = "Adarsh"

//$let str3 = str1 + str2
//$console.log(str3);

//$console.log("1" + 2);      // in this case 1 under string Output String  is as it in output and 2 come with it as same in output. 12
//$console.log(1 + "2");     // Also in this case 2 under string is as it  and 1 is coming as it in output . 12
//$console.log("1" + 2 + 2);  // Agar String Value Ke baad mein addition likha hai too add nhi hoga ... output is .122
//$//Similarly
//$console.log(1 + 2 + "2"); // Aur agar String value se addition likha hai to add ho jayega...output is. 32

//Conclusion is this : to better understanding visit the website 'ECMAScript' in 'Typeconversion' Section.


/*console.log( 3 + 4 * 5 % 3 ) :  it is right for questions or exam but not good for real life no single person will appereciate you . And what is the need to write 
confusion code if you want to define on values then use paranthesis. This way is not right for coorporate world it is request to make code readable much better.And again
 use Paranthesis*/

//console.log((3 + 4) * 5 % 3 ); // it is the right way for code readability.


//console.log(true);
console.log(+true); // basically true is booolean and i do a conversion. output : 1
//console.log(true+); // error
//console.log(""); // nothing will show in output 
//console.log(+""); // output : 0


let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //

//Further You will see some operation like 

let gameCounter = 100
gameCounter++;  //Postfix Operation go to js mdm site (increment)
++gameCounter;   //Prefix Operation go to js mdm site (increment)
console.log(gameCounter);

//Go and Study on mdm prefix and postfix


// Go and Study 
//// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion