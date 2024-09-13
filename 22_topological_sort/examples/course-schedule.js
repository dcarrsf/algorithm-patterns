function canFinish(numCourses, prerequisites) {
    const graph = new Array(numCourses).fill(0).map(() => []);
    const inDegree = new Array(numCourses).fill(0);
    
    for (const [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        inDegree[course]++;
    }
    
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }
    
    let count = 0;
    while (queue.length) {
        const course = queue.shift();
        count++;
        for (const neighbor of graph[course]) {
            if (--inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    
    return count === numCourses;
}

// Usage Example
console.log(canFinish(4, [[1,0],[2,1],[3,2]])); // true
console.log(canFinish(2, [[1,0],[0,1]])); // false
