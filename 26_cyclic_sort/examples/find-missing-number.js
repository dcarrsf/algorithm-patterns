function findMissingNumber(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] < nums.length && nums[i] !== nums[nums[i]]) {
            [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i) return i;
    }
    
    return nums.length;
}

// Usage Example
console.log(findMissingNumber([3, 0, 1])); // Output: 2
