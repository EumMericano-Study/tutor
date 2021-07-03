// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const input = ["5"];

const N = parseInt(input[0]);
for (let i = 0; i < N; i++) {
  let printLine = "";
  for (let j = 0; j < N - i - 1; j++) {
    printLine += " ";
  }
  for (let j = 0; j < 2 * (i + 1) - 1; j++) {
    printLine += "*";
  }
  console.log(printLine);
}
for (let i = 1; i < N; i++) {
  let printLine = "";
  for (let j = 0; j < i; j++) {
    printLine += " ";
  }
  for (let j = 0; j < 2 * (N - i) - 1; j++) {
    printLine += "*";
  }
  console.log(printLine);
}
