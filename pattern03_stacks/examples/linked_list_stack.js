class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.top = null;
        this.maxStack = [];  // To keep track of maximum elements
    }

    push(value) {
        const newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;

        // Update max stack
        if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.push(value);
        }
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedValue = this.top.value;
        this.top = this.top.next;

        // Update max stack
        if (poppedValue === this.maxStack[this.maxStack.length - 1]) {
            this.maxStack.pop();
        }

        return poppedValue;
    }

    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    getMax() {
        return this.maxStack.length === 0 ? null : this.maxStack[this.maxStack.length - 1];
    }
}

// Example usage:
const stack = new LinkedListStack();

stack.push(3);
stack.push(5);
stack.push(2);
stack.push(1);

console.log("Current max:", stack.getMax());  // Output: 5
console.log("Popped:", stack.pop());          // Output: 1
console.log("Current max:", stack.getMax());  // Output: 5
console.log("Popped:", stack.pop());          // Output: 2
console.log("Current max:", stack.getMax());  // Output: 5
console.log("Popped:", stack.pop());          // Output: 5
console.log("Current max:", stack.getMax());  // Output: 3
