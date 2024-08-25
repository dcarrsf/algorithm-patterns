function iterativePreorderTraversal(root) {
    if (!root) return [];

    const result = [];
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.val);

        // Push right child first so that left is processed first (LIFO)
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return result;
}

// Example usage:
const root = {
    val: 1,
    left: {
        val: 2,
        left: {val: 4},
        right: {val: 5}
    },
    right: {
        val: 3,
        left: {val: 6},
        right: {val: 7}
    }
};

console.log(iterativePreorderTraversal(root));  // Output: [1, 2, 4, 5, 3, 6, 7]
