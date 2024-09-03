function isCircular(arr) {
    if (arr.length <= 1) return true;
    
    let slow = 0;
    let fast = 0;
    
    do {
        slow = (slow + 1) % arr.length;
        fast = (fast + 2) % arr.length;
        if (arr[slow] !== arr[fast]) return false;
    } while (slow !== fast);
    
    return slow === 0;
}

// Usage Example
let arr1 = [1, 2, 3, 1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

console.log(isCircular(arr1)); // Output: true
console.log(isCircular(arr2)); // Output: false
