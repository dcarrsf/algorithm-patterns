function findDuplicate(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] !== i + 1) {
            if (nums[i] !== nums[nums[i] - 1]) {
                [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
            } else {
                return nums[i];
            }
        } else {
            i++;
        }
    }
    return -1;
}

// Usage Example
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
