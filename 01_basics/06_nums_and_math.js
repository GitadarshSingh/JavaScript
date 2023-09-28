
//********************************Numbers************************************ 
const score = 400               // go to inspect
//console.log(score);


const balance = new Number(100)
//console.log(balance);

 /* number {100}
[[Prototype]]
: 
Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf() */

//console.log(balance.toString().length);
//console.log(balance.toFixed(1));
//console.log(balance.toFixed(2));


//const outherNumber = 23.8966 // Output :23.9

const outherNumber = 123.8966             // Prority before decimal
//console.log(outherNumber.toPrecision(3));  //Output : 124
//console.log(outherNumber.toPrecision(4)); // output :123.9

const hundreds = 1000000
//console.log(hundreds.toLocaleString());  // Output : 1,000,000 : Basically Represent United State Standard .
//console.log(hundreds.toLocaleString('en-IN'));   // Output : 10,00,000 => Indian Standard : 'en_IN' used for indian toLocalString

//*********************************************Maths******************************************************************************
// Maths library Comes bydefault in javascript.

console.log(Math); //OPutput : Object 

//console.log(Math.abs(-4)); // Output : 4 => Chnages the -ve values in +values not +ve to -ve .
//console.log(Math.round(4.3)); // Output : 4 is the nearest integer => The value to be rounded to the nearest integer.
//console.log(Math.round(4.6));  // Nearest integer is 5.

//console.log(Math.ceil(4.2)); // Output : 5 => Ceil means Ceiling it use always Upper Integer
//console.log(Math.floor(4.2)); // Output : 4 => floor means ground it always use Lower Integer.

//console.log(Math.min(4,5,2,9,8,45,65)); // output : 2 => boz 2 minimum value out of this 
//console.log(Math.max(5,6,8,9,3,6,56,98,6,58)); //output : 98 => box 98 is the maximum value .

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math.random()); // 'Math.random' aapko hamesa 0 aur 1 ke beech mein value dega. Aur o value hames same nhi hoga 
                         //jaise kabi 0.1 aur kabhi 0.5 ho sakta hai.

// suppose i'm making a dice game and i want betwn 1 & 6.
 
console.log(Math.random()*10); // suppose 'Math.random' ki vakue aai 0.2564 too 10 se multiply karne par 2.564 ho gayega .


//$console.log(Math.random()*10  );   

console.log((Math.random()*10) + 1); //To avoid which thing will execut first which will second.
console.log(Math.floor(Math.random()*10) + 1);  // Suppose 10 se multiply karne par value aai 0.1 aur hamne use kiya 'Math.floor' to ye 
                                                //lowest roudoff kar dega esliye maine '+ 1' kiya hai. 

// Small Trick To difine Min and Max

// Kabhi kabhi esa case bhi aat ajana aapko min bhi define karna hota aur max bhi.

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min ); // Note down in your note and it is very very important.