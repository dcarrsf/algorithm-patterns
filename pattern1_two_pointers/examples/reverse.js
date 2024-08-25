function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// Example usage:
const arr = [0,1,2,3];
console.log(reverseArray(arr)); // Output: [3,2,1,0]
