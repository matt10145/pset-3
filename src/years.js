const readlineSync = require("readline-sync");

let year = Number(readlineSync.question("\nEnter a year: "));

if (year < 0 || year >= Number.MAX_SAFE_INTEGER || Number.isNaN(year) || (year % 1) != 0) {
  console.log("\nInvalid.\n");
}
else if ((year % 4) == 0 && (year % 100) != 0) {
  console.log(`\n${year} is a leap year.\n`);
}
else if ((year % 100) == 0) {
  if ((year % 400) == 0) {
    console.log(`\n${year} is a leap year.\n`);
  }
  else {
    console.log(`\n${year} is not a leap year.\n`)
  }
}
else {
  console.log(`\n${year} is not a leap year.\n`);
}
