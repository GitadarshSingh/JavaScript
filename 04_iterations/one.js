// For
/*
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}// Output : error box arry is not defined
*/
/*
for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}// Output : 1 to 9
*/

/*
for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log(element);
    
}// Output : 1 to 10
*/
/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);
    
}// Output : 1  to 10
*/

//console.log(element); // Not excessible outside the scope

/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    console.log(element);
    
}

*/


for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${1}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop $(i)`);
        //console.log(i + '*' + j + '=' + i*j);
    }
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}

// 0 = flash
// 1 = Batman
// 2 = superman


// break and continue
/*
for (let index = 0; index <= 20 ; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break;
    }
  console.log(`value of i is ${index}`);
    
}
*/



for (let index = 0; index <= 20 ; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // Ek baar maaf kar deta hain.
    }
  console.log(`value of i is ${index}`);
    
}