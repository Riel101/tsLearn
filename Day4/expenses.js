const expenses = [23, 43, 65, 12, 34, 24]

function addExpense(arr) {
    return expenses.concat(arr)
}

function removeExpense(cond) {
    return expenses.filter((el) => el > cond)
}

function totalSpent() {
    return expenses.reduce((a, b) => a + b)

}

function byCategory(arr, cate) {
    return arr.filter((el) => el.category === cate)
}

function biggestExpense() {
    return expenses.reduce((a, b) => a > b ? a : b)
}
// console.log(biggestExpense());

function hasExpensiveItem(arr, amt) {
    return arr.some((el) => el.price >= amt)
}
const arrE = [{n: "Yam", price: 20}, {n:"Bread", price: 10}]
console.log(hasExpensiveItem(arrE, 20));

function sortedByAmount(amt) {
    const sortedEx = expenses.toSorted((a, b) => a - b)

    return sortedEx.slice()
}