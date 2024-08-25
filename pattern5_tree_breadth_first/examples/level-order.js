function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Example usage:
const root1 = {val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}};
console.log(levelOrder(root1));  // Output: [[3], [9, 20], [15, 7]]
