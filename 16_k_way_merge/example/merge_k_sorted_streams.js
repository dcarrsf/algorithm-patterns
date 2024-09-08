class Stream {
    constructor(data) {
        this.data = data;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.data.length;
    }

    next() {
        return this.data[this.index++];
    }
}

function mergeKSortedStreams(streams) {
    const minHeap = new MinHeap();
    const result = [];

    // Push the first element from each stream
    for (let i = 0; i < streams.length; i++) {
        if (streams[i].hasNext()) {
            minHeap.push([streams[i].next(), i]);
        }
    }

    while (minHeap.heap.length > 0) {
        const [val, streamIndex] = minHeap.pop();
        result.push(val);

        if (streams[streamIndex].hasNext()) {
            minHeap.push([streams[streamIndex].next(), streamIndex]);
        }
    }

    return result;
}

// Usage Example
const stream1 = new Stream([1, 4, 7]);
const stream2 = new Stream([2, 5, 8]);
const stream3 = new Stream([3, 6, 9]);
console.log(mergeKSortedStreams([stream1, stream2, stream3]));
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
