function checkStock(stock) {
  if (stock >= 5) {
    console.log("在庫は十分です");
  } else if (stock >= 1 && stock <= 4) {
    console.log("在庫が少なくなっています");
  } else {
    console.log("在庫切れです");
  }
}

const stockList = [10, 3, 0, 7];

for (let i = 0; i < stockList.length; i++) {
  console.log(`${i+1}件目の在庫チェック:`);
  checkStock(stockList[i]);
}