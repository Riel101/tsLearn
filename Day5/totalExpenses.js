const expenses = [
    { id: 1, title: "Lunch", amount: 200, category: "food" },
    { id: 2, title: "Lunch", amount: 4000, category: "transport" },
    { id: 3, title: "Lunch", amount: 12000, category: "food" },
    { id: 4, title: "Lunch", amount: 20000, category: "transport" }
]

function totalPerCategory(list) {
    return list.reduce((totals, expense) => {
        totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
        return totals;
    }, {});
}

console.log(totalPerCategory(expenses))
// console.log(expenses)