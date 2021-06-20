import readline from "readline";
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input
  .on("line", (line) => {
    const N = parseInt(line);

    let result = 0;
    for (let i = 1; i <= input; i++) {
      result += i;
    }

    console.log(result);
  })
  .on("close", () => {
    process.exit();
  });
