let stock = 0;

if (stock >= 5) {
    console.log("在庫は十分です");
} else if (stock >= 1 && stock <= 4) {
    console.log("在庫が少なくなっています");
} else {
    console.log("在庫切れです");
}


function checkStock(stock) {
    if (stock >= 5) {
        console.log("在庫は十分です");
    } else if (stock >=1 && stock <=4) {
        console.log("在庫が少なくなっています");
    } else {
        console.log("在庫切れです");
    }
}

checkStock(10);
checkStock(2);
checkStock(0);