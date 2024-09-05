function medianSlidingWindow(nums, k) {
    let result = [];
    let window = new MedianFinder();
    
    for (let i = 0; i < nums.length; i++) {
        window.addNum(nums[i]);
        if (i >= k - 1) {
            result.push(window.findMedian());
            window.remove(nums[i - k + 1]);
        }
    }
    
    return result;
}

// Usage Example
let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;
console.log(medianSlidingWindow(nums, k)); 
// Output: [1,-1,-1,3,5,6]
