class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return min;
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    bubbleDown(index) {
        while (true) {
            let minIndex = index;
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            
            if (leftChild < this.heap.length && this.heap[leftChild][0] < this.heap[minIndex][0]) {
                minIndex = leftChild;
            }
            if (rightChild < this.heap.length && this.heap[rightChild][0] < this.heap[minIndex][0]) {
                minIndex = rightChild;
            }
            
            if (minIndex === index) break;
            
            [this.heap[index], this.heap[minIndex]] = [this.heap[minIndex], this.heap[index]];
            index = minIndex;
        }
    }
}

function mergeKSortedArrays(arrays) {
    const result = [];
    const minHeap = new MinHeap();

    // Push the first element from each array
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            minHeap.push([arrays[i][0], i, 0]);
        }
    }

    while (minHeap.heap.length > 0) {
        const [val, arrayIndex, elementIndex] = minHeap.pop();
        result.push(val);

        if (elementIndex + 1 < arrays[arrayIndex].length) {
            minHeap.push([arrays[arrayIndex][elementIndex + 1], arrayIndex, elementIndex + 1]);
        }
    }

    return result;
}

// Usage Example
const arrays = [[1,4,5],[1,3,4],[2,6]];
console.log(mergeKSortedArrays(arrays));  // Output: [1,1,2,3,4,4,5,6]
