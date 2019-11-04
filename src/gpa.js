const readlineSync = require("readline-sync");

let letterInput = readlineSync.question("\nEnter a letter grade: ");
letterInput = letterInput.toUpperCase();

if (letterInput == "A" || letterInput == "A+") {
  console.log("\nYour GPA is 4.00.");
}
else if (letterInput == "A-") {
  console.log("\nYour GPA is 3.67.");
}
else if (letterInput == "B+") {
  console.log("\nYour GPA is 3.33.");
}
else if (letterInput == "B") {
  console.log("\nYour GPA is 3.00.");
}
else if (letterInput == "B-") {
  console.log("\nYour GPA is 2.67.");
}
else if (letterInput == "C+") {
  console.log("\nYour GPA is 2.33.");
}
else if (letterInput == "C") {
  console.log("\nYour GPA is 2.00.");
}
else if (letterInput == "C-") {
  console.log("\nYour GPA is 1.67.");
}
else if (letterInput == "D+") {
  console.log("\nYour GPA is 1.33.");
}
else if (letterInput == "D") {
  console.log("\nYour GPA is 1.00.");
}
else if (letterInput == "D-") {
  console.log("\nYour GPA is 0.67.");
}
else if (letterInput == "F" || letterInput == "F+" || letterInput == "F-") {
  console.log("\nYour GPA is 0.00.");
}
else {
  console.log("\nInvalid.");
}
