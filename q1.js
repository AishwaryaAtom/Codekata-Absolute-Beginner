// You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.

// Input Description:
// A number "A" representing some distance in kilometer is provided to you as the input.

// Output Description:
// Convert and print this value in meters and centimeters.

// Sample Input :
// 2
// Sample Output :
// 2000
// 200000

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  let meters = userInput[0] * 1000;
  let centimeters = userInput[0] * 100000;
  console.log(meters);
  console.log(centimeters);

  //end-here
});
