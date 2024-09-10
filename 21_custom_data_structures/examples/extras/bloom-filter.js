class BloomFilter {
    constructor(size, numHashFunctions) {
        this.size = size;
        this.numHashFunctions = numHashFunctions;
        this.bitArray = new Array(size).fill(false);
    }

    add(element) {
        const hashes = this.getHashes(element);
        hashes.forEach(hash => {
            this.bitArray[hash] = true;
        });
    }

    contains(element) {
        const hashes = this.getHashes(element);
        return hashes.every(hash => this.bitArray[hash]);
    }

    getHashes(element) {
        const hashes = [];
        for (let i = 0; i < this.numHashFunctions; i++) {
            const hash = this.simpleHash(element, i) % this.size;
            hashes.push(hash);
        }
        return hashes;
    }

    simpleHash(str, seed) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash + str.charCodeAt(i)) * seed;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }
}

// Usage Example
const bloomFilter = new BloomFilter(100, 3);
bloomFilter.add("apple");
bloomFilter.add("banana");
console.log(bloomFilter.contains("apple")); // true
console.log(bloomFilter.contains("orange")); // false (probably)
