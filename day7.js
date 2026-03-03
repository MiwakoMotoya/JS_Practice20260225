console.log("Day7スタート！");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("数字を入力してください: ", function(answer) {
  const num = Number(answer);

//   if (num > 10) {
//     console.log("10より大きいです");
//   } else if (num === 10) {
//     console.log("10ちょうどです");
//   } else {
//     console.log("10より小さいです");
//   }

  if (num > 5) {
    console.log("5より大きいです");
  } else if (num === 5) {
    console.log("5ちょうどです");
  } else {
    console.log("5より小さいです");
  }

  rl.close();
});