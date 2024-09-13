function minimumTime(n, relations, time) {
    const graph = new Array(n+1).fill(0).map(() => []);
    const inDegree = new Array(n+1).fill(0);
    const maxTime = new Array(n+1).fill(0);
    
    for (const [prev, next] of relations) {
        graph[prev].push(next);
        inDegree[next]++;
    }
    
    const queue = [];
    for (let i = 1; i <= n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
            maxTime[i] = time[i-1];
        }
    }
    
    while (queue.length) {
        const task = queue.shift();
        for (const nextTask of graph[task]) {
            maxTime[nextTask] = Math.max(maxTime[nextTask], maxTime[task] + time[nextTask-1]);
            if (--inDegree[nextTask] === 0) queue.push(nextTask);
        }
    }
    
    return Math.max(...maxTime);
}

// Usage Example
console.log(minimumTime(3, [[1,3],[2,3]], [3,2,5])); // 8
console.log(minimumTime(5, [[1,5],[2,5],[3,5],[3,4],[4,5]], [1,2,3,4,5])); // 12
