// Concise object literal declarations using simple fields

/* Simplifies the declaration by reducing the values needed with the declaration
being written as compressed and doing without the additional values. */
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  ({ name, age, gender });
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
