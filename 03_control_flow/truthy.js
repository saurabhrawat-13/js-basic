const userEmail = "s@urabh.gmail"
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