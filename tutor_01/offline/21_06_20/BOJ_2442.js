const input = parseInt(require("fs").readFileSync("/dev/stdin").toString());
const N = parseInt(input);

for (let i = 1; i <= N; i++) {
  let printLine = "";
  for (let j = N - i; j > 0; j--) {
    printLine += " ";
  }
  for (let j = 0; j < 2 * (i - 1) + 1; j++) {
    printLine += "*";
  }
  console.log(printLine);
}
