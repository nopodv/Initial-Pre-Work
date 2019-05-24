// Use destructuring assignment to assign variables from arrays

/* Reassigns variables from arrays. Allows the given values to equal the
opposite variable. */
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];

  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
