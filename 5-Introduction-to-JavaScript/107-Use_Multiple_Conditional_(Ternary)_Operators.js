// Use multiple conditional operators

/* Several conditionals will link to eachother with no if else statements.
The final conditional will consist of only the statement after the 2nd
conditional's statement, as there are only 2 options left. */
 function checkSign(num) {
 return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
 }

 checkSign(10);
