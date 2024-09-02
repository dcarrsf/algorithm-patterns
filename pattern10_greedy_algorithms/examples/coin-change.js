function coinChange(coins, amount) {
    coins.sort((a, b) => b - a); // Sort coins in descending order
    let count = 0;
    let remaining = amount;

    for (let coin of coins) {
        while (remaining >= coin) {
            remaining -= coin;
            count++;
        }
    }

    return remaining === 0 ? count : -1;
}

console.log(coinChange([25, 10, 5, 1], 63)); // Output: 6 (2 quarters, 1 dime, 3 pennies)
