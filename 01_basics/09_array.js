const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "Aquaman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros); // Output = [ 'thor', 'Ironman', 'spiderman', [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'Aquaman' ] ]
                 // ELEMNT 1 : Thor , E(2) = Ironman, E(3) = spiderman, E(4) = [ 'superman', 'flash', 'Aquaman'] 
                        // Problem = Array under Array we don't want this.
onsole.log(marvel_heros[3][1]); // output : flash

const allHeros = marvel_heros.concat(dc_heros) //Additional arrays and/or items to add to the end of the array
console.log(allHeros); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'Aquaman' ]

// Want to Spread two arrays 
//Spread : Kaach Ka Glass lijiye aur usko floor par gira dijiye to o spread ho jayega.
// Same 'spread' concept here .
const all_new_heros = [...marvel_heros, ...dc_heros];
// jaise aapne '...' lagaya to ab o array nhi rha ab har ek element alag alag ho gaye hain means spread ho gaya hain.
// aur ab jo value aayegi o alag alag value aayegi. means spread value aayegi.
console.log(all_new_heros);

//Concat bhi use kar sakte hain zada tar to '...' spread use karte hain.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Ab jo array batane ja raha hun o aap kabhi kabhi use karenge but aapko pata honi chaiye.

//$const another_array = [1, 2, 3 , [4, 5, 6,], 7, [6, 7,[4, 5]]]

const real_anothe_array = another_array.flat(2) //Returns a new array with all sub-array elements concatenated 
                                             //into it recursively up to the specified depth
console.log(real_anothe_array); // Output = [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// We can also use flat(infnity on the place of '2')

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Kabhi hum data select karte hain web page se to o alag formate mein aata hain kabi 'objects' mein to  
//kabhi 'string' mein lekin hume chaiye  ARRAY eske liye hum neeche diya gaya 'Array' ko kuch es format mein us ekarte hain.
// Pouch Bhi skte hain aur convert bhi kar sakte hain.

console.log(Array.isArray("Adarsh")); // It is not an array. Output : False
// Suppose I want to convert 'Adarsh' into array. But we need to 'from' on place of 'isArray'.

console.log(Array.from("Adarsh")); // An iterable object to convert to an array..
                            //  Output : [ 'A', 'd', 'a', 'r', 's', 'h']

//Interesting Case : for Interview.
console.log(Array.from({name: "Adarsh"})); // Output :[] empty array de raha kyuki ye 'log' ko directly convert nhi kar pa raha.
// Bolana padega ki 'keys' ka array banau or sirf eske 'value' ka array banau.  Agar Nhi banapayega to empty array dega.


// Suppose I have some values 

let score1 = 100
let score2 = 200
let score3 = 300
// Suppose aapke pass multiple 'variable' hain or , multiple 'Arrays' aapko enko Array mein Convert karna hai.
// Esme aapko karna ye hoga ki '.from' ke jagah '.of' kar dijiye .

console.log(Array.of(score1, score2, score3)); //A set of elements to include in the new array object
// Output : [ 100, 200, 300 ]



 







