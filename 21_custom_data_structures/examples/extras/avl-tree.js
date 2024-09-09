class AVLTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this.insertRecursive(this.root, value);
    }

    insertRecursive(node, value) {
        if (!node) {
            return new AVLNode(value);
        }

        if (value < node.value) {
            node.left = this.insertRecursive(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertRecursive(node.right, value);
        } else {
            return node;
        }

        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
        const balance = this.getBalance(node);

        if (balance > 1 && value < node.left.value) {
            return this.rightRotate(node);
        }

        if (balance < -1 && value > node.right.value) {
            return this.leftRotate(node);
        }

        if (balance > 1 && value > node.left.value) {
            node.left = this.leftRotate(node.left);
            return this.rightRotate(node);
        }

        if (balance < -1 && value < node.right.value) {
            node.right = this.rightRotate(node.right);
            return this.leftRotate(node);
        }

        return node;
    }

    // Additional AVL Tree methods (e.g., search, delete, balancing operations)
}

class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// Usage Example
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);
avlTree.insert(25);
