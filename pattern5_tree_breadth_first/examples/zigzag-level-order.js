function zigzagLevelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    let isLeftToRight = true;
    
    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            if (isLeftToRight) {
                currentLevel.push(node.val);
            } else {
                currentLevel.unshift(node.val);
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
        isLeftToRight = !isLeftToRight;
    }
    
    return result;
}

// Example usage:
const root3 = {val: 3, left: {val: 9}, right: {val: 20, left: {val: 15}, right: {val: 7}}};
console.log(zigzagLevelOrder(root3));  // Output: [[3], [20, 9], [15, 7]]
