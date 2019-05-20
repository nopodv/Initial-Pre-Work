// Local scope and function

/* Adds variable locally and doesn't allow it's use...so if you try to print
to the console it will not work. */
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
