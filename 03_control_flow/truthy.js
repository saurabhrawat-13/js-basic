const userEmail = []
if (userEmail) {
    console.log("got user email");
} else {
    console.log("Don't have user value");
}

// falsy value

//false, 0,-0,BigInt 0n, "", null, undefined,NaN

//*************** TRUTHY VALUE **************

// "0",'FALSE'," ",[],{},FUNCTION(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

//*********** nullish coalesing operator(??) : null defined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

//********************terniary operator 

//condition ?  true : false

const iceTea = 100
iceTea <= 80 ? console.log("less than 80") : console.log("more than 80");


