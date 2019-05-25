// Use getters and setters to control access to an object

/* Hides the temp in a a new object to avoid the user from accessing the actual
object directly. */
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor(thermos) {
    this._thermos = thermos;
  }
  get temp() {
    return this._thermos;
  }
  set temp (updatedTemp) {
    this._temp = updatedTemp;
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
