// One more loop that is : Foreach loop

const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function name() {

} )
// Call back function ke andar function ka 'name' nhi hota hai. 
// Jo parameters lagate hain ki ye loop itna smart hain ki har value par jayega .
// AUr uss value ko jo aap ka mann kahe o boliye like item boliye 'i' boliye y akuch bhi boliye.
const coding = ["js", "ruby", "java", "python", "cpp"]

//codeing.forEach(function (item) {
//
//} )


//codeing.forEach( greet =  () => )

//codeing.forEach(  (item) => {
//    console.log(item);
//} )


// PrintMe : function jo bhi deoge o print kar dega

//coding.forEach(printMe)

// Some interesting things

coding.forEach( (item , index, arr) => {
    console.log(item, index, arr);
})


//[{}, {}, {}] it is very used in forEach

const myCoding = [

    {
        languageName: "javascript",
        languagefileName: "js"
    },
    {
        languageName: "python",
        languagefileName: "py"
    },
    {
        languageName: "java",
        languagefileName: "java"
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
// Output : javascript
        //python
        //java

