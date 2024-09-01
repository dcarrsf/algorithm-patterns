function countWordFrequency(text) {
    const words = text.toLowerCase().split(/\s+/);
    const frequencyMap = new Map();
    
    for (let word of words) {
        frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
    }
    
    return frequencyMap;
}

// Usage Example
const text = "the quick brown fox jumps over the lazy dog";
const frequency = countWordFrequency(text);

console.log(frequency.get("the")); // 2
console.log(frequency.get("quick")); // 1
console.log(frequency.get("cat")); // undefined
