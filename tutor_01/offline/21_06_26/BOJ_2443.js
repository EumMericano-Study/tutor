// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const input = ["5"];

const N = parseInt(input[0]);
for (let i = 0; i < N; i++) {
  let printLine = "";
  for (let j = 0; j < i; j++) {
    printLine += " ";
  }
  for (let j = 0; j < 2 * (N - i) - 1; j++) {
    printLine += "*";
  }
  console.log(printLine);
}
