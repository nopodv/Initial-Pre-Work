// Const keyword declares a read only variable

/* Uses a const keyword for ensuring that the value remains the same. This will
give an error if there is an attempt to change it. Adding const variables using
all capitalization and undersores for spaces is good practice.*/
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
