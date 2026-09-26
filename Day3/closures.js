function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
  };

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Then prove each counter is independent:

const counter2 = makeCounter();
console.log(counter2()); // 1, not 4
console.log(counter());  // 4, the first counter kept going
