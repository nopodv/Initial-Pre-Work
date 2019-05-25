// Use class syntax to define a constructor function

// Class sytax is used to supply a function and make the new object.
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable{
  constructor(name) {
    this.name = name;
  }
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
