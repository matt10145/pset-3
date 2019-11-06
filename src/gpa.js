const readlineSync = require("readline-sync");

let letterInput = readlineSync.question("\nEnter a letter grade: ");
letterInput = letterInput.toUpperCase();

if (letterInput == "A" || letterInput == "A+") {
  console.log("\nYour GPA is 4.00.\n");
}
else if (letterInput == "A-") {
  console.log("\nYour GPA is 3.67.\n");
}
else if (letterInput == "B+") {
  console.log("\nYour GPA is 3.33.\n");
}
else if (letterInput == "B") {
  console.log("\nYour GPA is 3.00.\n");
}
else if (letterInput == "B-") {
  console.log("\nYour GPA is 2.67.\n");
}
else if (letterInput == "C+") {
  console.log("\nYour GPA is 2.33.\n");
}
else if (letterInput == "C") {
  console.log("\nYour GPA is 2.00.\n");
}
else if (letterInput == "C-") {
  console.log("\nYour GPA is 1.67.\n");
}
else if (letterInput == "D+") {
  console.log("\nYour GPA is 1.33.\n");
}
else if (letterInput == "D") {
  console.log("\nYour GPA is 1.00.\n");
}
else if (letterInput == "D-") {
  console.log("\nYour GPA is 0.67.\n");
}
else if (letterInput == "F" || letterInput == "F+" || letterInput == "F-") {
  console.log("\nYour GPA is 0.00.\n");
}
else {
  console.log("\nInvalid.\n");
}
