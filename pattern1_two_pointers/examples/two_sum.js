/**
This code demonstrates key aspects of the Two Pointers pattern:

We initialize two pointers: left at the start of the array and right at the end.
We move the pointers towards each other based on the sum of the elements they point to.
The loop continues until the pointers meet or a solution is found.
We achieve O(n) time complexity by traversing the array only once.

This pattern is particularly efficient for this problem because we're working with a 
sorted array, allowing us to make intelligent decisions about which pointer to move 
based on the current sum.
 */
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