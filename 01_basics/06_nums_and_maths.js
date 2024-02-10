const score = 400 
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// to fixed for  precision value

const otherNumber = 123.53445

console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
console.log(hundreds.toLocaleString());




//  ++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(3.9));
console.log(Math.min(3,9,1));
console.log(Math.max(3,9,1));
console.log(Math.random());
console.log(Math.random()*9);

const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min );





