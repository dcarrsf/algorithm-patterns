function maxDepth(root) {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
const root3 = {val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}};
console.log(maxDepth(root3));  // Output: 3
