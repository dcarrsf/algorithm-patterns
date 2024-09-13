function findBuildOrder(projects, dependencies) {
    const graph = new Map();
    const inDegree = new Map();
    
    for (const project of projects) {
        graph.set(project, []);
        inDegree.set(project, 0);
    }
    
    for (const [proj, dep] of dependencies) {
        graph.get(dep).push(proj);
        inDegree.set(proj, inDegree.get(proj) + 1);
    }
    
    const queue = projects.filter(proj => inDegree.get(proj) === 0);
    const order = [];
    
    while (queue.length) {
        const project = queue.shift();
        order.push(project);
        for (const neighbor of graph.get(project)) {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) queue.push(neighbor);
        }
    }
    
    return order.length === projects.length ? order : null;
}

// Usage Example
const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
const dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
console.log(findBuildOrder(projects, dependencies)); // ['e', 'f', 'b', 'a', 'd', 'c']
