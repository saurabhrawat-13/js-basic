// Primitive

// 7 Types = String, Number, Boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 8374981237489327483n

//Reference (Non primitive)

// Array, Object, Functions

// Array

const heros = ["shaktiman","batman","superman"]

// Object 

let myObj = {
    name: "saurabh",
    age: "22",
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros);




//     ****************************. MEMORIES *********************************************


//Stack = Primitive, Heap = Non primitive


let myName = "saurabh"
 
let anotherName = myName
anotherName = "naveen"
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "saurabhrawat776@gmail.com"
    //upi: "user@ybl"
}


let userTwo = userOne

userTwo.email = "saurabharawat1313@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

