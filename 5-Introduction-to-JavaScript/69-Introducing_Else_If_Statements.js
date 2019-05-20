// Introduce else if statements

/* Adds else to second if statement and 2nd else statment for the remainder of
the statements. */
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
else {
  return "Between 5 and 10";
}
}
// Change this value to test
testElseIf(7);
