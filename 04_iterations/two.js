// While loop

let index = 0
while (index <= 10) {
 console.log(`value of index is ${index}`);
 index = index + 2   
}


let myArray = ["flash", "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


// do while loop 
// esme condition last mein check hoti hain.
// do while mein kaam phale hota hain aur kaam baad mein check hoti hain.

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
}while (score <= 10);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let score = 11

do {
    console.log(`Score is ${score}`);
    score++
}while (score <= 10); // Output : 11 boz do while mein kaam phale hota hain aur kaam baad mein check hoti hain.
