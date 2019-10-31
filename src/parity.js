const readlineSync = require("readline-sync");

let input = Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(input)) {
  console.log("\nInvalid.");
}
else if (input < Number.MIN_SAFE_INTEGER || input > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
}
else if (input % 2 == 0) {
  console.log("Even.");
}
else if (input % 2 != 0) {
  console.log("Odd.")
}
