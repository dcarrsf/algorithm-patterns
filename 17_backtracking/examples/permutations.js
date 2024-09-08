function generatePermutations(str) {
    const result = [];
    
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            backtrack(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
        }
    }
    
    backtrack('', str);
    return result;
}

// Usage Example
console.log(generatePermutations('abc'));
// Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
