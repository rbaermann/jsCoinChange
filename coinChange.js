function coinChange(num) {
    var change = {
        dollar : 0,
        quarter : 0,
        dime : 0,
        nickel : 0,
        pennies : 0
    };
    var d = 100;
    var q = 25;
    var t = 10;
    var n = 5;
    var p = 1;
    while(num >= d) {
        num -= d;
        change.dollar += 1;
    }
    while(num >= q) {
        num -= q;
        change.quarter += 1;
    }
    while(num >= t) {
        num -= t;
        change.dime += 1;
    }
    while(num >= n) {
        num -= n;
        change.nickel += 1;
    }
    while(num >= p) {
        num -= p;
        change.pennies += 1;
    }
    return change;
}

console.log(coinChange(312));