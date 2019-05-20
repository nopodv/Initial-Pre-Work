// Compare the logical or operator

/* Two statements test with 2 operands and the logical or operator. The value
can be one or the other to be true. */
function testLogicalOr(val) {
  // Only change code below this line
  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(30);
