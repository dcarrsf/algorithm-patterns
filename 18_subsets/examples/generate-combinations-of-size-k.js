function generateCombinations(n, k) {
    const result = [];
    
    function backtrack(start, current) {
        if (current.length === k) {
            result.push([...current]);
            return;
        }
        
        for (let i = start; i <= n; i++) {
            current.push(i);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(1, []);
    return result;
}

// Usage Example
console.log(generateCombinations(4, 2));
// Output: [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]
