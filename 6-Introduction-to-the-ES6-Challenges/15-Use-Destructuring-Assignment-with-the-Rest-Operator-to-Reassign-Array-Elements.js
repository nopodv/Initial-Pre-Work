// Use destructuring assignment with the rest operator to reassign array elements

/* Reassigns elements within array with the rest operator. So that when the
arr function is called it gives you everything that you subbed out.*/
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [ a, b, ...arr] = [1,2,3,4,5,6,7,8,9,10]; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
