function binaryTreePaths(root) {
    const result = [];
    
    function dfs(node, path) {
        if (!node) return;
        
        path.push(node.val);
        
        if (!node.left && !node.right) {
            result.push(path.join('->'));
        } else {
            dfs(node.left, [...path]);
            dfs(node.right, [...path]);
        }
    }
    
    dfs(root, []);
    return result;
}

// Example usage:
const root4 = {val: 1, left: {val: 2, right: {val: 5}}, right: {val: 3}};
console.log(binaryTreePaths(root4));  // Output: ["1->2->5", "1->3"]
