function preorderTraversal(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        result.push(node.val);  // Visit node
        dfs(node.left);         // Traverse left subtree
        dfs(node.right);        // Traverse right subtree
    }
    
    dfs(root);
    return result;
}

// Example usage:
const root1 = {val: 1, left: {val: 2}, right: {val: 3}};
console.log(preorderTraversal(root1));  // Output: [1, 2, 3]
