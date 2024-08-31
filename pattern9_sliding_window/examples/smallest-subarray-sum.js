function smallestSubarrayWithGivenSum(arr, targetSum) {
    let windowSum = 0;
    let windowStart = 0;
    let minLength = Infinity;
    
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        
        while (windowSum >= targetSum) {
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= arr[windowStart];
            windowStart++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
}

// Usage Example:
console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7)); // Output: 2
