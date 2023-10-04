//const tinderUser = new Object() // Singelton Object with output {}

const tinderUser = {}  //Non Singelton Object with outpit {}
// Don't write 'const' boz we don't want to declare 'tinderUser.id' agai.
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//$console.log(tinderUser); // Output : Empty Object that is {} 

// object inside onject .
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Adarsh",
            lastname: "Singh"
        }
    }
}
//$console.log(regularUser.fullname?.userfullname.firstname);
// Suppose 'fullname' exist hee nhi karta to '?' ye lagana hota hai nhi to hmesa aapko 'if-else' lagana padega.

// Going to combine or merging the objects  the objects 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//$const obj3 = {5: "a", 6: "b"}
//$const obj4 = {7: "a", 8: "b"}

// Same as a 'array' combination

//const obj3 = {obj1, obj2} // Jaise array ke andar array hota hia same obj. ke andar obj. hoga
//console.log(obj3); // output : { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//$const obj3 = Object.assign( obj1, obj2)
// One more syntax with empty paranthesis {} it is optional dijiye ya na dijye expected output yahi aayega. But you should to.
// {}, if you have more value then you need to like obj 4, 5 so on. 
//{}-- is target and obj1, obj2 act as a source if you don't take {} this then every values goes to 'obj1'.
const obj3 = Object.assign({}, obj1, obj2)
//$console.log(obj3);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread Operator : ek glass lejiye ayur usko chor dijiye spred ho gaya.
// (... is a symbol of spread operator)

const Obj3 = { ...obj1, ...obj2 }
//console.log(obj3); // earlier,we sperade and after that we combine the values


// Most commom syntax you will use multiple time that is 'Data Base Syntax'
// Array of objects

const User = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]
// Aage chal kar hum dekhenge ki prijects mein ki Array ke andar kafi ssari values aa rahi hai unko loop karna hai too oha par use karenge.

User[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ] it is an array.
// Further we need to use more remember it.We can also loop it.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//hasOwnProperty : Determines whether an object has a property with the specified name.@param v — A property name.



