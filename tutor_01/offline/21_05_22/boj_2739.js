const fs = require("fs");
// let N = parseInt(fs.readFileSync("/dev/stdin").toString());
let N = 3;

for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
