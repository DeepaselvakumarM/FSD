// task1
// let cart=[
//     {
//         id:1,
//         prouct:"laptop",
//         price:50000,
//         qty:1
//     },
//      {
//         id:2,
//         prouct:"Dress",
//         price:500,
//         qty:1
//     },
//      {
//         id:1,
//         prouct:"sunscreen",
//         price:50,
//         qty:2
//     },

// ]

// function total(cart){
//     let add=cart.map((item)=>{
//         item.price*item.qty+0
//     })
//     return add
// }

// let call=total(cart)
// console.log(call)


// task2

function statusCheck(product,callback){
    console.log(`you ordered the item ${product}`)
    callback(product)
}

const check=(product)=>{
    console.log(`your product ${product} will be delerived by monday`)
}

statusCheck("laptop",check)

