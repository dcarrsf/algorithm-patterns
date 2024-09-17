function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
}

// Usage Example
const nums1 = [4,1,2,1,2];
console.log(singleNumber(nums1)); // Output: 4
