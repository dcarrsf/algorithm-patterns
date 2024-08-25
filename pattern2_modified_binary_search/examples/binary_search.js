/**
Key points about this implementation:

1. It takes a sorted array and a target value as input.
2. It uses two pointers, left and right, to define the current search range.
3. In each iteration, it calculates the middle index and compares the middle element with the target.
4. Based on the comparison, it adjusts either the left or right pointer to narrow down the search range.
5. The process continues until the target is found or the search range is empty (left > right).
6. It returns the index of the target if found, or -1 if not found.

This classic binary search works well for finding exact matches in a sorted array. The modified versions 
we'll look at next will build upon this basic structure to solve more complex problems or work with 
different types of input arrays.
*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
console.log(binarySearch(sortedArray, 7));  // Output: 3
console.log(binarySearch(sortedArray, 10)); // Output: -1
console.log(binarySearch(sortedArray, 13)); // Output: 6
