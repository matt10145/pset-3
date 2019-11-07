const readlineSync = require("readline-sync");

let input = readlineSync.question("\nEnter a playing card: ");
input = input.toUpperCase();
let firstRank = input.charAt(0);
let firstSuit = input.charAt(1);
let outputRank = null;
let outputSuit = null;

var ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
var suits = ["C", "D", "H", "S"];
var rankString = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
var suitString = ["Clubs", "Diamonds", "Hearts", "Spades"];

// find correct rank through looping
for (let i = 0; i <= ranks.length; i++) {
  if (ranks[i] == firstRank) {
    outputRank = rankString[i];
    break;
  }
  else {
    //intentionally empty
  }
}

// find correct suit through looping
for (let i = 0; i <= suits.length; i++) {
  if (suits[i] == firstSuit) {
    outputSuit = suitString[i];
    break;
  }
  else {
    //intentionally empty
  }
}

if (outputRank != null && outputSuit != null) {
  console.log(`\n${outputRank} of ${outputSuit}.\n`);
}
else {
  console.log("\nInvalid.\n");
}