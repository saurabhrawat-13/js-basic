//  Immediately Invoked Function expression (IIFE)

(function chai() {
    // NAME IIFE
    console.log(`DB connected`);
})
();

((NAME) => {
    console.log(`DB CONNECTED TWO ${NAME}`);
})("SAURABH")

//  first "()" = is for function
// second "()" = is for execution
// should end with ;