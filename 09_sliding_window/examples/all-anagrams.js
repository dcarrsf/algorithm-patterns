function findAnagrams(s, p) {
    const result = [];
    const targetFreq = new Array(26).fill(0);
    const windowFreq = new Array(26).fill(0);
    
    // Count character frequencies in p
    for (let char of p) {
        targetFreq[char.charCodeAt(0) - 97]++;
    }
    
    for (let i = 0; i < s.length; i++) {
        // Add right character to window
        windowFreq[s[i].charCodeAt(0) - 97]++;
        
        // Remove left character from window if window size > p.length
        if (i >= p.length) {
            windowFreq[s[i - p.length].charCodeAt(0) - 97]--;
        }
        
        // Check if current window is an anagram
        if (i >= p.length - 1 && arraysEqual(targetFreq, windowFreq)) {
            result.push(i - p.length + 1);
        }
    }
    
    return result;
}

function arraysEqual(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Usage Example:
console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
