class MemoryBlock {
  constructor(size, address) {
    this.size = size;
    this.address = address;
    this.free = true;
  }
}

class HeapMemorySimulator {
  constructor(totalSize, blockSize) {
    this.totalSize = totalSize;
    this.blockSize = blockSize;
    this.memory = new Map();
    this.initializeMemory();
  }

  initializeMemory() {
    const blocksCount = Math.floor(this.totalSize / this.blockSize);
    for (let i = 0; i < blocksCount; i++) {
      const address = i * this.blockSize;
      this.set(address, new MemoryBlock(this.blockSize, address));
    }
  }

  hash(address) {
    // Simple hash function: address modulo total size
    return address % this.totalSize;
  }

  set(address, block) {
    let attempt = 0;
    let hash;
    do {
      // Quadratic probing: hash(k, i) = (h(k) + c1*i + c2*i^2) % m
      // Here we use c1 = c2 = 0.5
      hash = (this.hash(address) + Math.floor(0.5 * attempt + 0.5 * attempt * attempt)) % this.totalSize;
      if (!this.memory.has(hash) || this.memory.get(hash).address === address) {
        this.memory.set(hash, block);
        return;
      }
      attempt++;
    } while (attempt < this.totalSize);
    throw new Error("Hash table is full");
  }

  get(address) {
    let attempt = 0;
    let hash;
    do {
      hash = (this.hash(address) + Math.floor(0.5 * attempt + 0.5 * attempt * attempt)) % this.totalSize;
      if (this.memory.has(hash) && this