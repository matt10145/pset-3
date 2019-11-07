const readlineSync = require("readline-sync");

let gradeInput = Number(readlineSync.question("\nEnter a grade: "));

const A_UPPER_THRESHOLD = 100;
const A_LOWER_THRESHOLD = 90;
const B_LOWER_THRESHOLD = 80;
const C_LOWER_THRESHOLD = 70;
const D_LOWER_THRESHOLD = 60;

if (gradeInput <= A_UPPER_THRESHOLD && gradeInput >= A_LOWER_THRESHOLD) {
  console.log("\nYou received an A.\n");
}
else if (gradeInput < A_LOWER_THRESHOLD && gradeInput >= B_LOWER_THRESHOLD) {
  console.log("\nYou received a B.\n");
}
else if (gradeInput < B_LOWER_THRESHOLD && gradeInput >= C_LOWER_THRESHOLD) {
  console.log("\nYou received a C.\n");
}
else if (gradeInput < C_LOWER_THRESHOLD && gradeInput >= D_LOWER_THRESHOLD) {
  console.log("\nYou received a D.\n");
}
else if (gradeInput < D_LOWER_THRESHOLD && gradeInput >= 0) {
  console.log("\nYou received an F.\n");
}
else {
  console.log("\nInvalid.\n");
}
