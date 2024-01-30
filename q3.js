// Print the First 3 multiples of the given number "N". (N is a positive integer)

// Note: print the characters with a single space between them.

// Input Description:
// A positive integer is provided to you as an input.

// Output Description:
// Print the First 3 multiples of the number with single spaces between them as an output.

// Sample Input :
// 2
// Sample Output :
// 2 4 6

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

  let num = userInput[0] * 1;
  let num2 = userInput[0] * 2;
  let num3 = userInput[0] * 3;
  let Inputs = [];
  Inputs.push(num);
  Inputs.push(num2);
  Inputs.push(num3);
  let print = Inputs.join(" ");
  console.log(print);

  //end-here
});
