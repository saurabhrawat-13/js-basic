const myNums = [1,2,3,]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currva: ${currval}`);
//     return acc + currval
// },0) 

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal);



const shoppingCard = [{
iteamName: "js course",
Price: 2999
},
{
iteamName: "py course",
Price: 999
},
{
iteamName: "mobile dev course",
Price: 5999
},
{
iteamName: "data sciencecourse",
Price: 12999
},
]

const priceToPay = shoppingCard.reduce( (acc,item) => acc + item.Price, 0)
console.log(priceToPay);