// Write concise declarative functions

/* Reducing the extraneous syntax used in ES5 this uses a function within
a n object. */
// change code below this line
const bicycle = {
  gear: 2,
  setGear (newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
