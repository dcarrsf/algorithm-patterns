function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const stack = [];
    const result = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
            const idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }
    
    return result;
}

// Usage Example
const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]
