function findNearestRightNode(root, u) {
    if (!root) return null;
    
    const queue = [root];
    
    while (queue.length) {
        const levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            if (node === u) {
                return i === levelSize - 1 ? null : queue[0];
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return null;
}

// Example usage:
const root4 = {val: 1, left: {val: 2, right: {val: 4}}, right: {val: 3, left: {val: 5, right: {val: 6}}}};
const u = root4.left.right;  // node with value 4
console.log(findNearestRightNode(root4, u).val);  // Output: 5
