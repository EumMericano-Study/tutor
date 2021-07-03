// const fs = require("fs");
// const input = fs.readFileSync("./dev/stdin").toString().split(" ");
const input = ["2"];
const score = Number(input[0]);

if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
