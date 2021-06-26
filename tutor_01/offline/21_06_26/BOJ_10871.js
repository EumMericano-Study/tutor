const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const input = fs.readFileSync("./text.txt").toString().split(" ");

const N = parseInt(input[0]);
const X = parseInt(input[1]);

let printLine = "";
for (let i = 2; i < N + 2; i++) {
  if (X > input[i]) {
    printLine += `${input[i]} `;
  }
}
console.log(printLine);
