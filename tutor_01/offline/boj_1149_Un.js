const fs = require("fs");
// let N = parseInt(fs.readFileSync("/dev/stdin").toString()).split(" ");
let N = "3 26 40 83 49 60 57 13 89 99".split(" ");

let index = -1;
let houseLen = N[++index];

let map = [];

for (let i = 0; i < houseLen; i++) {
  let house = [];
  house[0] = N[++index];
  house[1] = N[++index];
  house[2] = N[++index];
  map[i] = house;
}
// print map
for (let i = 0; i < map.length; i++) {
  line = "";
  for (let j = 0; j < map[i].length; j++) {
    line += `${map[i][j]} `;
  }
  console.log(line);
}

function DFS(before, n, total) {
  console.log("before", before, "n", n, "total", total);
}
