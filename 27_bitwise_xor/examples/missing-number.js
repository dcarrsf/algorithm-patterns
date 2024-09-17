function missingNumber(nums) {
    let xor = nums.length;
    for (let i = 0; i < nums.length; i++) {
        xor ^= i ^ nums[i];
    }
    return xor;
}

// Usage Example
const nums2 = [3,0,1];
console.log(missingNumber(nums2)); // Output: 2
