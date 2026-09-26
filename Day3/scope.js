let a = "global";

  function outer() {
    let b = "outer";
    console.log(a); // can you see a here? Yes
    console.log(b); // and b? Yes

    function inner() {
      let c = "inner";
      console.log(a); // a? Yes
      console.log(b); // b? Yes
      console.log(c); // c? Yes
    }
    inner();
  }

  outer();
  console.log(a); // a out here? Yes
  console.log(b); // b out here? No
