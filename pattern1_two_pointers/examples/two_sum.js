function findTwoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
            return [left, right]; // Found the pair
        } else if (sum < target) {
            left++; // Sum is too small, move left pointer to the right
        } else {
            right--; // Sum is too large, move right pointer to the left
        }
    }

    return null; // No solution found
}

// Example usage:
const sortedArray = [2, 7, 11, 15];
const target = 9;
console.log(findTwoSum(sortedArray, target)); // Output: [0, 1]
