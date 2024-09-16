function calculateSpan(prices) {
    const n = prices.length;
    const stack = [];
    const spans = new Array(n).fill(1);
    
    for (let i = 0; i < n; i++) {
        while (stack.length && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }
        if (stack.length) {
            spans[i] = i - stack[stack.length - 1];
        } else {
            spans[i] = i + 1;
        }
        stack.push(i);
    }
    
    return spans;
}

// Usage Example
const prices = [100, 80, 60, 70, 60, 75, 85];
console.log(calculateSpan(prices)); // Output: [1, 1, 1, 2, 1, 4, 6]
