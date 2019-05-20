// Logical order in else if statements

/* Order of the statements will matter. If they are not in an order that makes
sense, then the output will not work. */
function orderMyLogic(val) {
   if (val < 5) {
    return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  }
  else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(4);
