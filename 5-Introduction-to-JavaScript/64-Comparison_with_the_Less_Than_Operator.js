// Compare with the less than operator

/* Less than will determine whether one of the values is less than another
value. The data types will not matter for this operator. */
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(20);
