// Explore differences between var and let keywords

/* Enables variable values to sustain their initial value.
So, if the variable is delared again somewhere after the initial declaration,
then it is ignored...and an error occurs, drawing attention to the fact that it
had already been used. */
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
