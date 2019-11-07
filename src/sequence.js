const readlineSync = require("readline-sync");

console.log("\nEnter three numbers.")
let number1 = Number(readlineSync.question("\n"));
let number2 = Number(readlineSync.question(""));
let number3 = Number(readlineSync.question(""));

if (Number.isNaN(number1) || Number.isNaN(number2) || Number.isNaN(number3)) {
  console.log("\nInvalid.\n");
}
else if (number1 < Number.MIN_SAFE_INTEGER || number2 < Number.MIN_SAFE_INTEGER || number3 < Number.MIN_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}
else if (number1 > Number.MAX_SAFE_INTEGER || number2 > Number.MAX_SAFE_INTEGER || number3 > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}
else if ((number1 == number2 && number3 > number2) || (number2 > number1) && (number2 == number3)) {
  console.log("\nIncreasing.\n");
}
else if (number2 > number1 && number3 > number2) {
  console.log("\nStrictly increasing.\n");
}
else if (number1 == number2 && number2 == number3) {
  console.log("\nEqual.\n");
}
else if ((number1 == number2 && number3 < number2) || (number2 < number1) && (number2 == number3)) {
  console.log("\nDecreasing.\n");
}
else if (number2 < number1 && number3 < number2) {
  console.log("\nStrictly decreasing.\n");
}
else if ((number2 > number1 && number3 < number2) || (number2 < number1 && number3 > number2)) {
  console.log("\nUnordered.\n")
}
