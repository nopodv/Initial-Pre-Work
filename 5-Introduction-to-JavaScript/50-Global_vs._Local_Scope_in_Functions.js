// Global vs local scope in functions

/* Adds a local variable to override the global variable. Due to the Global
variable being outside the function. */
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var myOutfit = "sweater";
  return myOutfit;

  // Only change code above this line
  return outerWear;
}

myOutfit();
