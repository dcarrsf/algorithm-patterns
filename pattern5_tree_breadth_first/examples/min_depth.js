function minDepth(root) {
    if (!root) return 0;
    
    const queue = [{node: root, depth: 1}];
    
    while (queue.length) {
        const {node, depth} = queue.shift();
        
        if (!node.left && !node.right) {
            return depth;
        }
        
        if (node.left) queue.push({node: node.left, depth: depth + 1});
        if (node.right) queue.push({node: node.right, depth: depth + 1});
    }
}

// Example usage:
const root2 = {val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}};
console.log(minDepth(root2));  // Output: 2
