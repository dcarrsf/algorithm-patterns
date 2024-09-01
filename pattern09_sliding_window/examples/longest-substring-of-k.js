function longestSubstringKDistinct(str, k) {
    const charFrequency = new Map();
    let windowStart = 0;
    let maxLength = 0;
    
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        charFrequency.set(rightChar, (charFrequency.get(rightChar) || 0) + 1);
        
        while (charFrequency.size > k) {
            const leftChar = str[windowStart];
            charFrequency.set(leftChar, charFrequency.get(leftChar) - 1);
            if (charFrequency.get(leftChar) === 0) {
                charFrequency.delete(leftChar);
            }
            windowStart++;
        }
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
}

// Usage Example:
console.log(longestSubstringKDistinct("araaci", 2)); // Output: 4
