const readlineSync = require("readline-sync");

let temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scale = readlineSync.question("Enter a scale: ");
scale = scale.toUpperCase();

const FREEZING_F = 32;
const BOILING_F = 212;
const FREEZING_C = 0;
const BOILING_C = 100;
const FREEZING_K = 273.15;
const BOILING_K = 373.15;

if (temperature < Number.MIN_SAFE_INTEGER || temperature > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.");
}
else if (Number.isNaN(temperature)) {
  console.log("\nInvalid.");
}
else if (scale != "F" && scale != "C" && scale != "K") {
  console.log("\nInvalid.");
}

switch (scale) {
  case "F":
    if (temperature <= FREEZING_F && temperature >= Number.MIN_SAFE_INTEGER) {
      console.log("\nSolid.");
    }
    else if (temperature > FREEZING_F && temperature < BOILING_F) {
      console.log("\nLiquid.");
    }
    else if (temperature >= BOILING_F && temperature <= Number.MAX_SAFE_INTEGER) {
      console.log("\nGas.");
    }
    break;

  case "C":
    if (temperature <= FREEZING_C && temperature >= Number.MIN_SAFE_INTEGER) {
      console.log("\nSolid.");
    }
    else if (temperature > FREEZING_C && temperature < BOILING_C) {
      console.log("\nLiquid.");
    }
    else if (temperature >= BOILING_C && temperature <= Number.MAX_SAFE_INTEGER) {
      console.log("\nGas.");
    }
    break;

  case "K":
    if (temperature <= FREEZING_K) {
      console.log("\nSolid.");
    }
    else if (temperature > FREEZING_K && temperature < BOILING_K) {
      console.log("\nLiquid.");
    }
    else if (temperature >= BOILING_K) {
      console.log("\nGas.");
    }
    break;
}
