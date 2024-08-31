const MaxHeap = require('./max-heap.js');

function kClosest(points, k) {
    const maxHeap = new MaxHeap((a, b) => 
        (b[0]**2 + b[1]**2) - (a[0]**2 + a[1]**2)
    );
    
    for (let point of points) {
        maxHeap.add(point);
        if (maxHeap.size() > k) {
            maxHeap.poll();
        }
    }
    
    return maxHeap.getHeap();
}

// Usage Example
const points = [[1,3],[-2,2],[5,8],[0,1]];
const k4 = 2;
console.log(kClosest(points, k4)); // Output: [[0,1], [1,3]]
