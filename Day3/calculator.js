function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function calculate(operation, a, b) {
    return operation(a, b)
}

console.log(calculate(add, 5, 3));      // 8
console.log(calculate(multiply, 5, 3)); // 15