# JavaScript Practice

JavaScript基礎学習の記録リポジトリです。

## 学習内容

- Day1 変数
- Day2 if文
- Day3 関数
- Day4 ループ
- Day5 配列
- Day6 オブジェクト
- Day7 入力処理
- Day8 計算処理
- Day9 JavaScript理解の整理
- Day10 関数を使った計算処理

## 学習ログ

詳細は  
study-log.md  
に記録しています。

## 実行方法

Node.jsで実行できます。

例：
node day1.js
node day2.js


## サンプルコード

Day11で作成した関数（Day11/day11.js）

```javascript
function double(num) {
  return num * 2;
}

function triple(num) {
  return num * 3;
}

console.log(double(5));
console.log(triple(5));
