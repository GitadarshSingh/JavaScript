// 

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
// Object pe kaise loop lagega let's see
// forin loop hmesa obects ke liye hee nhi hot aaur bhi jagah kam aata hain
/*for (const key in myObject) {
    console.log(key);            // forin loop and remove if in forin loop
}*/
// OUtput: js
//cpp
//rb
//swift


/*
for (const key in myObject) {
    console.log(myObject[key]);            
}*/
// OUtput: js
//cpp
//rb
//swift
//javascript
//C++
//ruby
//swift by apple

/*
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);            
}*/
// Output: js shortcut is for javascript
//cpp shortcut is for C++
//rb shortcut is for ruby
//swift shortcut is for swift by apple

const programming = ["js", "rb", "py", "java", "cpp"]
/*
for (const key in programming) {
   console.log(key);
}*/
//  Output : 0
           //1
           //2
           //3
           //4


const map = new Map()
map.set('IN', "India")
map.set('IN', "India") // Map does't repeat value again
map.set('USA', "United State Of America")
map.set('FR', "France")

for (const key in map) {
  console.log(key);
}
// Map is not iteratable that cause we can't apply loop on it
/*


// Note : objects : forin loop
// Arrays: forof loop we more other loop in array but now we used forof loop only
