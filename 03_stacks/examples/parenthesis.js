function isValidParentheses(s) {
    const stack = [];
    const openBrackets = '({[';
    const closeBrackets = ')}]';
    const bracketPairs = {')': '(', '}': '{', ']': '['};

    for (let char of s) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.pop() !== bracketPairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(isValidParentheses("(){}[]"));  // Output: true
console.log(isValidParentheses("([)]"));    // Output: false
console.log(isValidParentheses("{[]}"));    // Output: true
