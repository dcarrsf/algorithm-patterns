function searchRange(nums, target) {
    const findBound = (isFirst) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                if (isFirst) {
                    if (mid === left || nums[mid - 1] < target) return mid;
                    right = mid - 1;
                } else {
                    if (mid === right || nums[mid + 1] > target) return mid;
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    };

    return [findBound(true), findBound(false)];
}

// Example usage:
const nums1 = [5,7,7,8,8,10];
console.log(searchRange(nums1, 8));  // Output: [3, 4]
console.log(searchRange(nums1, 6));  // Output: [-1, -1]
console.log(searchRange([1], 1));    // Output: [0, 0]
