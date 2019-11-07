const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const QUARTER_VALUE = 25;
const DIME_VALUE = 10;
const NICKEL_VALUE = 5;

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
  quarters = Math.floor(convertPennies/QUARTER_VALUE);
  dimes = Math.floor((convertPennies -= (quarters*QUARTER_VALUE))/DIME_VALUE);
  nickels = Math.floor((convertPennies -= (dimes*DIME_VALUE))/NICKEL_VALUE);
  pennies = Math.floor((convertPennies -= (nickels*NICKEL_VALUE)));

  console.log(`\n${quarters} quarters, ${dimes} dimes, ${nickels} nickels, and ${pennies} pennies.\n`)
}