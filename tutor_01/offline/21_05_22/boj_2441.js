const fs = require("fs");
// let n = parseInt(fs.readFileSync("/dev/stdin").toString());
let n = 5;

let line = "";
for (let i = 0; i < parseInt(input); i++) {
  line = "";
  for (let j = 0; j <= i; j++) {
    line += " ";
  }
  for (let j = n; j > i; j--) {
    line += "*";
  }
  console.log(line);
}

for (let i = 0; i < n; i++) {
  let stars = "";
  for (let j = 0; j < n; j++) {
    if (j < i) {
      stars = stars.concat(" ");
    } else {
      stars = stars.concat("*");
    }
  }
  console.log(stars);
}
