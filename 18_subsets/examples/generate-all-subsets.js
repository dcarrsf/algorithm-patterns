function generateSubsets(nums) {
    const subsets = [];
    
    function backtrack(start, current) {
        subsets.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return subsets;
}

// Usage Example
console.log(generateSubsets([1, 2, 3]));
// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
