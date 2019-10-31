const readlineSync = require("readline-sync");

let letterInput = readlineSync.question("\nEnter a letter grade: ");

if (!Number.isNaN(letterInput)) {
  console.log("\nInvalid.");
}
