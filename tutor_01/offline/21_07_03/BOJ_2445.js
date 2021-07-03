// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const input = ["3"];

const N = parseInt(input[0]);

let printLine = "";
for (let i = 0; i < N; i++) {
  printLine = "";
  for (let j = -1; j < i; j++) {
    printLine += "*";
  }
  for (let j = 0; j < 2 * (N - i - 1); j++) {
    printLine += " ";
  }
  for (let j = -1; j < i; j++) {
    printLine += "*";
  }
  console.log(printLine);
}
for (let i = 1; i < N; i++) {
  printLine = "";
  for (let j = 0; j < N - i; j++) {
    printLine += "*";
  }
  for (let j = 0; j < 2 * i; j++) {
    printLine += " ";
  }
  for (let j = N - i; j > 0; j--) {
    printLine += "*";
  }
  console.log(printLine);
}
