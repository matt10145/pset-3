const readlineSync = require("readline-sync");

let input = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(input)) {
  console.log("\nInvalid.\n")
}
else if (input < Number.MIN_SAFE_INTEGER || input > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}
else if (input == 0) {
  console.log("\nZero.\n");
}
else if (input > 0 && input <= Number.MAX_SAFE_INTEGER) {
  console.log("\nPositive.\n");
}
else if (input < 0 && input >= Number.MIN_SAFE_INTEGER) {
  console.log("\nNegative.\n");
}
