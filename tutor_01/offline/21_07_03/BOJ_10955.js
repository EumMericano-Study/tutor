// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const input = ["2"];

const N = parseInt(input[0]);

let printLine = "";
if (N === 1) {
  console.log("*");
} else {
  for (let i = 0; i < N; i++) {
    printLine = "";
    for (let j = 0; j < 2 * N; j++) {
      if ((i + j) % 2 !== 1) {
        printLine += "*";
      } else {
        printLine += " ";
      }
    }
    console.log(printLine);
  }
}
