// let cart = [
//   { id: 1, name: "Laptop", price: 50000, qty: 1 },
//   { id: 2, name: "Headphones", price: 2000, qty: 2 }
// ];


// function addCart(product){
//     let existing= cart.find(item=>item.id===product.id)

//     if (existing){
//         existing.qty++
//     }
//     else {
//         cart.push({...product,qty:1})
//         console.log("Added sucessfully")

//     }
// }

// addCart({ id: 3, name: "Mobile", price: 12000 });
// addCart({ id: 1, name: "Laptop", price: 50000 })

// // console.log(cart)



// function removeCart(id){
//     cart=cart.filter(item=>item.id!==id)
// }

// removeCart(2)
// console.log(cart)



let orders = [
  {
    orderId: 101,
    customer: "Deepa",
    items: [
      { name: "Laptop", price: 50000, qty: 1 },
      { name: "Mouse", price: 500, qty: 2 }
    ],
    delivered: true
  },
  {
    orderId: 102,
    customer: "Kumar",
    items: [
      { name: "Phone", price: 20000, qty: 1 }
    ],
    delivered: false
  }
];


// task1
let total=orders.map((product)=>{
    let add=product.items.reduce((sum,price)=>{
        return sum+price.price
    },0)
    
})

console.log(total)

// Find Pending Orders

let pending=orders.filter(item=>item.delivered===false)

console.log(pending)

// Find Order by Customer Name

let user=orders.find(u=>u.customer==="Deepa")

console.log(user)

// Check If Any Order Exceeds ₹40,000

let check=orders.some(item=>item.items>40000)
console.log(check)