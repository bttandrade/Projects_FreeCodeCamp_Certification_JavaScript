function checkCashRegister(price, cash, cid) {
    let changeTemp = cash - price;
    let change = {status: "", change: []};
    let i = 0;
    let totalCid = 0;

    function reduceSize(ini, pos, name) {
        if (changeTemp >= ini) {
            while (changeTemp >= ini && cid[pos][1] > 0) {
                i += ini;
                changeTemp -= ini;
                cid[pos][1] -= ini;
                changeTemp = changeTemp.toFixed(2);
            }
            change.change.push([name, i]);
            i = 0;
        }
    }
    for (let i = 0; i < 9; i++) {
        totalCid += (cid[i][1]);  
    }
    if (totalCid < cash - price) {
        change.status = "INSUFFICIENT_FUNDS";
        return change;
    } else if (totalCid == cash - price) {
        change.status = "CLOSED";
        change.change = cid;
        return change;
    } else {
        reduceSize(100, 8, "ONE HUNDRED");
        reduceSize(20, 7, "TWENTY");
        reduceSize(10, 6, "TEN");
        reduceSize(5, 5, "FIVE");
        reduceSize(1, 4, "ONE");
        reduceSize(0.25, 3, "QUARTER");
        reduceSize(0.1, 2, "DIME");
        reduceSize(0.05, 1, "NICKEL");
        reduceSize(0.01, 0, "PENNY");
        if (changeTemp > 0) {
            change.status = "INSUFFICIENT_FUNDS";
            change.change = [];
            return change;
        }
        change.status = "OPEN";
        return change;
    }
}
  
//console.log(checkCashRegister(15.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0.5], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));