class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    enqueue(item, priority) {
        this.heap.push({ item, priority });
        this.heapifyUp(this.heap.length - 1);
    }

    dequeue() {
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyUp(index) {
        const parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.heap[parentIndex].priority > this.heap[index].priority) {
            this.swap(index, parentIndex);
            this.heapifyUp(parentIndex);
        }
    }

    heapifyDown(index) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let smallestIndex = index;

        if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[smallestIndex].priority) {
            smallestIndex = leftChildIndex;
        }

        if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[smallestIndex].priority) {
            smallestIndex = rightChildIndex;
        }

        if (smallestIndex !== index) {
            this.swap(index, smallestIndex);
            this.heapifyDown(smallestIndex);
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

// Usage Example
const pq = new PriorityQueue();
pq.enqueue('Task A', 3);
pq.enqueue('Task B', 1);
pq.enqueue('Task C', 2);
console.log(pq.dequeue()); // { item: 'Task B', priority: 1 }
console.log(pq.dequeue()); // { item: 'Task C', priority: 2 }
console.log(pq.dequeue()); // { item: 'Task A', priority: 3 }
