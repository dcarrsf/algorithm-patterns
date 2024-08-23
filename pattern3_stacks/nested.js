function evaluateExpression(expression) {
    const stack = [];
    const operators = {'+': (a, b) => a + b, '-': (a, b) => a - b, '*': (a, b) => a * b, '/': (a, b) => a / b};

    for (let token of expression.split(' ')) {
        if (token in operators) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(operators[token](a, b));
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
}

// Example usage:
console.log(evaluateExpression("3 4 + 2 *"));  // Output: 14
console.log(evaluateExpression("5 1 2 + 4 * + 3 -"));  // Output: 14
