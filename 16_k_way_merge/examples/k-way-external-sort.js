function externalSort(chunks, k) {
    const minHeap = new MinHeap();
    const sortedChunks = chunks.map(chunk => chunk.sort((a, b) => a - b));
    const result = [];

    // Push the first element from each chunk
    for (let i = 0; i < sortedChunks.length; i++) {
        if (sortedChunks[i].length > 0) {
            minHeap.push([sortedChunks[i][0], i, 0]);
        }
    }

    while (minHeap.heap.length > 0) {
        const [val, chunkIndex, elementIndex] = minHeap.pop();
        result.push(val);

        if (elementIndex + 1 < sortedChunks[chunkIndex].length) {
            minHeap.push([sortedChunks[chunkIndex][elementIndex + 1], chunkIndex, elementIndex + 1]);
        }

        // Simulate writing to disk every k elements
        if (result.length % k === 0) {
            console.log(`Writing ${k} elements to disk`);
        }
    }

    return result;
}

// Usage Example
const chunks = [[3, 5, 7], [0, 6], [0, 6, 28]];
console.log(externalSort(chunks, 2));
// Output:
// Writing 2 elements to disk
// Writing 2 elements to disk
// Writing 2 elements to disk
// [0, 0, 3, 5, 6, 6, 7, 28]
