// You are provided with a number, "N". Find its factorial.

// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the factorial of the integer.

// Sample Input :
// 2
// Sample Output :
// 2
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

  function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }

  let result = factorialIterative(userInput[0]);
  console.log(result);

  //end-here
});
