function nextGreaterElement(arr) {
    const n = arr.length;
    const stack = [];
    const result = new Array(n).fill(-1);
    
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i);
    }
    
    return result;
}

// Usage Example
const arr = [4, 5, 2, 10, 8];
console.log(nextGreaterElement(arr)); // Output: [5, 10, 10, -1, -1]
