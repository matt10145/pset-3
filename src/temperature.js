const readlineSync = require("readline-sync");

let temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scale = readlineSync.question("Enter a scale: ");
scale = scale.toUpperCase();

const freezingF = 32;
const boilingF = 212;
const freezingC = 0;
const boilingC = 100;
const freezingK = 273.15;
const boilingK = 373.15;

if (temperature < Number.MIN_SAFE_INTEGER || temperature > Number.MAX_SAFE_INTEGER) {
  console.log("\nInvalid.\n");
}
else if (Number.isNaN(temperature)) {
  console.log("\nInvalid.\n");
}
else if (scale != "F" && scale != "C" && scale != "K") {
  console.log("\nInvalid.\n");
}

switch (scale) {
  case "F":
    if (temperature <= freezingF && temperature >= Number.MIN_SAFE_INTEGER) {
      console.log("\nSolid.\n");
    }
    else if (temperature > freezingF && temperature < boilingF) {
      console.log("\nLiquid.\n");
    }
    else if (temperature >= boilingF && temperature <= Number.MAX_SAFE_INTEGER) {
      console.log("\nGas.\n");
    }
    break;

  case "C":
    if (temperature <= freezingC && temperature >= Number.MIN_SAFE_INTEGER) {
      console.log("\nSolid.\n");
    }
    else if (temperature > freezingC && temperature < boilingC) {
      console.log("\nLiquid.\n");
    }
    else if (temperature >= boilingC && temperature <= Number.MAX_SAFE_INTEGER) {
      console.log("\nGas.\n");
    }
    break;

  case "K":
    if (temperature <= freezingK) {
      console.log("\nSolid.\n");
    }
    else if (temperature > freezingK && temperature < boilingK) {
      console.log("\nLiquid.\n");
    }
    else if (temperature >= boilingK) {
      console.log("\nGas.\n");
    }
    break;
}
