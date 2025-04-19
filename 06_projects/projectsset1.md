# Projects related to DOM

## Project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1

```javascript
console.log("Adarsh")

// First, Select All 'Element' button
// Second, 'Select Body' using document.querySelector()

//First
const buttons = document.querySelectorAll('.button')
// console.log(buttons);

//Second,
const body = document.querySelector("body")
// console.log(body);

// What are events ?
// Ans: There are meany events in browser like Movement Of Cursor, Closing if tabs, click is also an event.

// We have nodelist can easily apply for-each loop 
buttons.forEach(function(button){
  console.log(button);
  //eventListner
  button.addEventListener('click', function(e){
console.log(e);
console.log(e.target);

if(e.target.id == 'grey'){
  body.style.backgroundColor = e.target.id;
}

if(e.target.id == 'white'){
  body.style.backgroundColor = e.target.id;
}

if(e.target.id == 'blue'){
  body.style.backgroundColor = e.target.id;
}


if(e.target.id == 'yellow'){
  body.style.backgroundColor = e.target.id;
}

if(e.target.id == 'pink'){
  body.style.backgroundColor = e.target.id;
}
  });
});

```