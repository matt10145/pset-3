const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid.\n")
}
else if (amount < MIN || amount > MAX) {
  console.log("\nInvalid.\n")
}
else {
  convertPennies = amount * 100;
  quarters = Math.floor(convertPennies/25);
  dimes = Math.floor((convertPennies -= (quarters*25))/10);
  nickels = Math.floor((convertPennies -= (dimes*10))/5);
  pennies = Math.floor((convertPennies -= (nickels*5))/1);

  console.log(`\n${quarters} quarters, ${dimes} dimes, ${nickels} nickels, ${pennies} pennies.\n`)
}
