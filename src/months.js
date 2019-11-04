const readlineSync = require("readline-sync");

let month = readlineSync.question("Enter a month: ");
month = month.toUpperCase();

if (month == "JAN" || month == "JANUARY") {
  console.log("31 days.");
}
else if (month == "FEB" || month == "FEBRUARY") {
  console.log("28 or 29 days.");
}
else if (month == "MAR" || month == "MARCH") {
  console.log("31 days.");
}
else if (month == "APR" || month == "APRIL") {
  console.log("30 days.");
}
