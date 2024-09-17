function swapNumbers(a, b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    return [a, b];
}

// Usage Example
let [x, y] = swapNumbers(5, 10);
console.log(x, y); // Output: 10 5
