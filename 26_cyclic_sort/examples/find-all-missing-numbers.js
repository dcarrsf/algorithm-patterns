function findAllMissingNumbers(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctPos = nums[i] - 1;
        if (nums[i] !== nums[correctPos]) {
            [nums[i], nums[correctPos]] = [nums[correctPos], nums[i]];
        } else {
            i++;
        }
    }
    
    const missingNumbers = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            missingNumbers.push(i + 1);
        }
    }
    
    return missingNumbers;
}

// Usage Example
console.log(findAllMissingNumbers([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [5, 6]
