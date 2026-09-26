function add(a, b) { return a + b; }              // declaration
  const add2 = function(a, b) { return a + b; };    // expression
  const add3 = (a, b) => a + b;                      // arrow, implicit return

// Confirm all three give the same answer. Then defaults:
console.log(add(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));



  function greet(name = "friend") {
    return `Hello, ${name}`;
  }
  console.log(greet());        // Hello, friend
  console.log(greet("Ada"));   // Hello, Ada
