function countPalindromicSubstrings(s) {
    const n = s.length;
    const dp = Array(n).fill().map(() => Array(n).fill(false));
    let count = 0;

    // All substrings of length 1 are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        count++;
    }

    // Check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            count++;
        }
    }

    // Check for lengths greater than 2
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1;
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                count++;
            }
        }
    }

    return count;
}

// Usage Example
console.log(countPalindromicSubstrings("aaa")); // Output: 6
