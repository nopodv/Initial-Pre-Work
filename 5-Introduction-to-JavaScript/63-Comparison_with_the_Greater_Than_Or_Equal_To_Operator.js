// Compare with the greater than or equal to operator

/* Greater than or equal to will determine whether one of the values is more
than or equal to another value. The data types will not matter for this
operator. */
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
