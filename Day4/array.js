products = [
    {
        name: "Phone",
        price: 200000,
        category: "device",
    },
    {
        name: "Bed",
        price: 80000,
        category: "appliance",
    },
    {
        name: "TV",
        price: 120000,
        category: "appliamce",
    },
    {
        name: "Laptop",
        price: 500000,
        category: "device",
    },
    {
        name: "Airpod",
        price: 60000,
        category: "device",
    },
    {
        name: "Spotify",
        price: 1600,
        category: "subscription",
    },
    {
        name: "YT Music",
        price: 1700,
        category: "subscription",
    },
    {
        name: "Tech Chair",
        price: 70000,
        category: "appliance",
    },
    {
        name: "Netflix",
        price: 2400,
        category: "subscription",
    },
]

products.forEach(ele => {
    if (ele.price < 5000) {
        console.log(ele)
    }
});

products.forEach(ele => console.log(ele.name))

let tpa = 0
products.forEach( ele => {
    if (ele.category === "device"){
        tpa += ele.price
    }
})
console.log(tpa);

console.log(products.find(ele => ele.category === "subscription"))

products.forEach((e, i) => {
    if (e.name === "Bed"){
        console.log(i)
    }
})

products.forEach(e => {
    if (e.price > 500000) {
        console.log(e)
    }
})


console.log()
let newProds = products.toSorted((a, b) => a.price - b.price)
console.log(newProds)
// console.log()

const prodsName = products.toSorted((a, b) => a.name.localeCompare(b.name))
console.log(prodsName)

const nums = [12, 5, 88, 3, 45, 88, -7];
console.log(nums.sort());
console.log(nums.sort((a, b) => b - a));

const newNums = nums.reduce((a, b) => a + b)
console.log(newNums);
