// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const input = ["4"];

const N = parseInt(input[0]);

for (let i = 0; i < 2 * N; i++) {
  let printLine = "";
  for (let j = 0; j < N; j++) {
    if (N === 1 && i === 1) continue;
    if ((i + j) % 2 === 0) printLine += "*";
    else printLine += " ";
  }
  console.log(printLine);
}
