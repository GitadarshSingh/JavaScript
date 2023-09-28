const name = "Adarsh"
const repoCount = 10

//console.log(name + repoCount + " Value");  => Outdated old time people uses this

//Modern time 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // PLz PLz Plz use this syntax not above syntax

 const gameName = new String('AdarshSc')

 //console.log(gameName [0]);
 //console.log(gameName.__proto__);

 //console.log(gameName.length);          //Output : Length 8
 //console.log(gameName.toUpperCase());   // Output :ADARSHSC

// console.log(gameName.toLocaleLowerCase());  //Output : adarshsc

 //console.log(gameName.charAT(2));
 //$console.log(gameName.indexOf('r'));

//You should need to check atleast once type of Stings which helps you in interviews
// To check go to Inspect 

// For More Methods

//const newString = gameName.substring(0,4) //Substing Not use the negative value like -8 if you will give then it will start from zero
//console.log(newString);  //Output : Adar and important is that last word 's' will be absent .

const anotherString = gameName.slice(-8,4)
console.log(anotherString); //Start from last


// Trim And  Replace Method 

const newStringOne = "  Adarsh "
console.log(newStringOne);  // OUtput : __Adarsh__  => __ it denotes space

console.log(newStringOne.trim()); //Output : Adarsh , Baically 'Trim' Removes the  Starting and Ending spaces from sring.


// Link Mdm For betten Standing Of 'Trim' : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = " https://adarsh.com/adarsh%20singh" // dekho url hai hmra 'https://adarsh.com' aur jo hmari value aai o hai 'adarsh%20singh'
                                                //  Par problem ye hai ki humra browser 'Spaces' nhi samajhta 
                                                //jaise maan lo kisi ne de diya hai 'adarsh-singh' to browser kya krega ki o 'space' ko '%20' mein change kar dega
                                                //adarsh-singh => adarsh%20singh.
                                                
         // suppose mujhe adarsh url lo replace karna hai to hmre pass kafi methods hai but hum 'replace' ka use karenge.
         
          console.log(url.replace('%20' , '-')) // Output : https://adarsh.com/adarsh-singh

          // Suppose aap kuch Dekhna chayate ho url mein ki oha Present hai ya nhi.
          // uske ke liye use karenge (.includes(' '))

          //$console.log(url.includes('adarsh')); // output : 'true' adarsh is present in it
          console.log(url.includes('sundar')); // output : 'true' adarsh is present in it

          //Split
          
          console.log(gameName.split('-'));