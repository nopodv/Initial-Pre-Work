// Compare with inequality operator

/* Adds inequality operator to determine false statements. The operator is
not strict, so values with different types wont matter. */
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
