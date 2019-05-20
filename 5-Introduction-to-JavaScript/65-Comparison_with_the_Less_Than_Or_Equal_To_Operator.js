// Compare with the less than or equal to operator

/* Less than or equal to will determine whether one of the values is less
than or equal to another value. The data types will not matter for this
operator. */
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(4);
