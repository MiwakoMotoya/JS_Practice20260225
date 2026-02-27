console.log("Day3スタート！");
function greet(name) {
  console.log("こんにちは " + name);
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("あなたの名前を入力してください: ", function(answer) {
  greet(answer);
  rl.close();
});