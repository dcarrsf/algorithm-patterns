function postorderTraversal(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        
        dfs(node.left);         // Traverse left subtree
        dfs(node.right);        // Traverse right subtree
        result.push(node.val);  // Visit node
    }
    
    dfs(root);
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

console.log(postorderTraversal(root));  // Output: [4, 5, 2, 6, 7, 3, 1]
