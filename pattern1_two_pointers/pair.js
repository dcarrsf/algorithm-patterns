function findPair(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) return [left, right];
        sum < target ? left++ : right--;
    }
    return null;
}

// Example usage:
const sortedArray = [2, 7, 11, 15];
const target = 9;
console.log(findPair(sortedArray, target)); // Output: [0, 1]
