// Compare with the strict equality operator

/* Compares values with different types and gives equality for only those that
are the same.  So, if a string "10" and a number 10 were compared...it would
not be equal for example. */
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
