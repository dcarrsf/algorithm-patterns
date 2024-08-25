function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

// Example usage:
const nums3 = [1,2,1,3,5,6,4];
console.log(findPeakElement(nums3));  // Output: 5 (index of 6)
console.log(findPeakElement([1,2,3,1]));  // Output: 2 (index of 3)
console.log(findPeakElement([1]));  // Output: 0
