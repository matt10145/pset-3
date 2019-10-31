const readlineSync = require("readline-sync");

let input = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(input)) {
  console.log("\nInvalid.")
}
else if (input < Number.MIN_SAFE_INTEGER || input > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
}
else if (input == 0) {
  console.log("\nZero.");
}
else if (input > 0 && input <= Number.MAX_SAFE_INTEGER) {
  console.log("\nPositive.");
}
else if (input < 0 && input >= Number.MIN_SAFE_INTEGER) {
  console.log("\nNegative.");
}
