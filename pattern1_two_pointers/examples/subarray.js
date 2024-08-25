function findSubarray(nums, target) {
    let left = 0, right = 0, sum = 0;
    while (right < nums.length) {
        sum += nums[right];
        while (sum > target && left < right) {
            sum -= nums[left];
            left++;
        }
        if (sum === target) return [left, right];
        right++;
    }
    return null;
}

// Example usage:
const sortedArray = [2, 3, 4, 11, 15];
const target = 9;
console.log(findSubarray(sortedArray, target)); // Output: [0, 2]
