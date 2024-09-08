function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    
    function backtrack(start, current) {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue;
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}

// Usage Example
console.log(subsetsWithDup([1, 2, 2]));
// Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
