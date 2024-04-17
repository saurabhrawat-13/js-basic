const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(  function  (val){
// console.log(val);
// })

//*********** arror fuction ***********


// coding.forEach( (val)  => {
//     console.log(val);
// })

// function printMe(iteam){
//     console.log(iteam);

// }
// coding.forEach(printMe)

// coding.forEach( (iteam, index, array) => {
//     console.log(iteam, index, array);

// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }

]

myCoding.forEach(  (item) => {
    console.log(item.languageFileName);
})
