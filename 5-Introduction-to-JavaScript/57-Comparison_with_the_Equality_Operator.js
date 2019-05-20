// Compare with the equality operator

/* One value compared with the other will return values of true or false. Using
the equals operator will allow this to become true or false. */
// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);
