const cache = new Map();

function expensiveOperation(key) {
    if (cache.has(key)) {
        return cache.get(key);
    }
    const result = key * key * key; // Simulating expensive calculation
    cache.set(key, result);
    return result;
}

// Usage Example
console.log(expensiveOperation(5)); // Calculates and returns 125
console.log(expensiveOperation(5)); // Quickly returns 125 from cache
console.log(expensiveOperation(3)); // Calculates and returns 27
