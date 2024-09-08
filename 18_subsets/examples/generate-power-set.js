function generatePowerSet(nums) {
    const powerSet = [[]];
    
    for (const num of nums) {
        const size = powerSet.length;
        for (let i = 0; i < size; i++) {
            powerSet.push([...powerSet[i], num]);
        }
    }
    
    return powerSet;
}

// Usage Example
console.log(generatePowerSet([1, 2, 3]));
// Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
