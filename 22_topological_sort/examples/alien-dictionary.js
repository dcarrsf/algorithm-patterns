function alienOrder(words) {
    const graph = new Map();
    const inDegree = new Map();
    
    for (const word of words) {
        for (const char of word) {
            if (!graph.has(char)) {
                graph.set(char, new Set());
                inDegree.set(char, 0);
            }
        }
    }
    
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i], word2 = words[i+1];
        const minLength = Math.min(word1.length, word2.length);
        for (let j = 0; j < minLength; j++) {
            if (word1[j] !== word2[j]) {
                if (!graph.get(word1[j]).has(word2[j])) {
                    graph.get(word1[j]).add(word2[j]);
                    inDegree.set(word2[j], inDegree.get(word2[j]) + 1);
                }
                break;
            }
        }
    }
    
    const queue = [...inDegree.entries()]
        .filter(([char, degree]) => degree === 0)
        .map(([char]) => char);
    
    let order = '';
    while (queue.length) {
        const char = queue.shift();
        order += char;
        for (const nextChar of graph.get(char)) {
            inDegree.set(nextChar, inDegree.get(nextChar) - 1);
            if (inDegree.get(nextChar) === 0) queue.push(nextChar);
        }
    }
    
    return order.length === graph.size ? order : '';
}

// Usage Example
console.log(alienOrder(["wrt","wrf","er","ett","rftt"])); // "wertf"
console.log(alienOrder(["z","x","z"])); // ""
