// Date
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString()); // output :  Fri Sep 29 2023 13:05:09 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toISOString()); // Output : 2023-09-29T13:16:17.203Z
//console.log(myDate.toJSON());  // Output : 2023-09-29T13:17:25.482Z
//console.log(myDate.toLocaleDateString()); //Output : 9/29/2023
//console.log(myDate.toLocaleString());    // 9/29/2023, 1:19:33 PM
//$console.log(myDate.toLocaleTimeString()); // Output : 1:20:27 PM
                                           //Where : 1 stands for 1 hours past noon
                                           // "20" represents 20 minutes past the hour
                                           // "27" represents 27 seconds past the minute.
//So, the timestamp "1:20:27 PM" specifies a time of day that is 1 hour, 20 minutes, and 27 seconds past noon,
// in the afternoon or evening. 

//$console.log(typeof myDate); // Output : Objects

//Suppose If i want to declare a date

//let myCreatedDate = new Date(2023 , 0 , 23 , 5 ,3)
let myCreatedDate = new Date("01-14-2023")

//console.log(myCreatedDate); // output : 2023-01-23T00:00:00.000Z but it is not clear now we use toDateString().
//$console.log(myCreatedDate.toDateString()); // Output : Mon Jan 23 2023

/*in JavaScript, months in the Date object are represented using a zero-based index, which means that January
 is represented as 0, February as 1, March as 2, and so on, up to December, which is represented as 11. */
//$console.log(myCreatedDate.toLocaleDateString()); //Output : 1/23/2023.


//Suppose SomeTime i want MM-DD-YY or YY-DD-MM

//let myCreatedDate = newDate("2023-01-14") // String mein month 1 represent hotha hai Jan as 1 , Feb as 2 , Marsh as 3 so on .
//console.log(myCreatedDate.toLocaleString);


//TimeStamps bhi hote hai Date ke andar.
// Espically jab aap Quizes design krenge or Poll Design Krenge tab aapko 'TimeStamps' ka zada Use karenge.
// Jaise Kisne Polls faster diya hai usko winner banana hai eme 'Timestamp' ka use kareng.

let myTimeStamp = Date.now()
console.log(myTimeStamp); // output : 1695999254841 millisecond mein hota hai .

// Maan lo jo upar diya hai @ wala 'myCreatedDate' se millisecond niklna hai.
//Suppose aap ko koi 'Hotel room app ' bana rahe hain to us time aapko dates compare karne padte hain.
//$console.log(myCreatedDate.getTime()); // Outpit : 1673654400000 millisecond mein hota hai Aur ye 1970 se aaj tak ki millisecond ki value hain.

//  now we  can compare these above output values

// Main Seconds mein Convert karke dikata hun. to aap 'Date.now Ko divide krdijiye 1000 se. Divide karne par aapko point(.) mein vslue milega to aap 'Math.floor'use kar sakte hain.

// myCreatedDate ek object hai . to aap bol sakte '.getTime'
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


// Some More Method Similar to Date.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default', {
weekday: "long",
timeZone :Animation
} ) 
// {} => Object declarisation. { (ctrl + space) karne par jo aap chaiye o mil jata hai.Speciality of vs code}






