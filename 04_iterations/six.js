const coding = ["js", "ruby", "java", "python", "cpp"]


//const values = coding.forEach( (item) => {
//    //console.log(item);
//    return item        // output : js, ruby, java, python, cpp
//} )

//console.log(values); // OUtput: undefined boz forEach doesn't return the value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4)
//console.log(newNums); // Output : [ 5, 6, 7, 8, 9, 10 ]

// Whenever we ised 'filter' then we will got 'callback function' and each value will excess. Lastly, we will give the 'conditions'
// if conditions will satisfied then it will write the values otherwise it will not be wrote.
// That is known as Basic of 'filter'

//const newNums = myNums.filter( (num) => {
//    // num > 4     // Output: [] empty bracket boz whenever we used curlybraces then we need to write 'return' keywords 
//    return num > 4 // Output: [ 5, 6, 7, 8, 9, 10 ] it will work after writing 'return'
//     
//})
//console.log(newNums);

// Suppose You want to do same work with 'forEach' with myNum

// And how to use with with it 'forEach'

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//const newNums = []
//
//myNums.forEach( (num) => {
//    if(num>4) {
//        newNums.push(num)
//    }
//})
//console.log(newNums); // Output: [ 5, 6, 7, 8, 9, 10 ]



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let  userbooks= books.filter( (bk) => bk.genre === 'History')
  
 userbooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'Science'
})
  console.log(userbooks);

// You shoud need to more practive like this.