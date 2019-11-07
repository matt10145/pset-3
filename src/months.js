const readlineSync = require("readline-sync");

let month = readlineSync.question("\nEnter a month: ");
month = month.toUpperCase();

if (month == "JAN" || month == "JANUARY") {
  console.log("\n31 days.\n");
}
else if (month == "FEB" || month == "FEBRUARY") {
  console.log("\n28 or 29 days.\n");
}
else if (month == "MAR" || month == "MARCH") {
  console.log("\n31 days.\n");
}
else if (month == "APR" || month == "APRIL") {
  console.log("\n30 days.\n");
}
else if (month == "MAY") {
  console.log("\n31 days.\n");
}
else if (month == "JUN" || month == "JUNE") {
  console.log("\n30 days.\n");
}
else if (month == "JUL" || month == "JULY") {
  console.log("\n31 days.\n");
}
else if (month == "AUG" || month == "AUGUST") {
  console.log("\n31 days.\n");
}
else if (month == "SEP" || month == "SEPTEMBER") {
  console.log("\n30 days.\n");
}
else if (month == "OCT" || month == "OCTOBER") {
  console.log("\n31 days.\n");
}
else if (month == "NOV" || month == "NOVEMBER") {
  console.log("\n30 days.\n");
}
else if (month == "DEC" || month == "DECEMBER") {
  console.log("\n31 days.\n");
}
else {
  console.log("\nInvalid.\n");
}
