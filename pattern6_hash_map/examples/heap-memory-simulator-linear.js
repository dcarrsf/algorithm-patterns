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
    // Improved hash function using prime numbers for better distribution
    const prime = 31;
    return (address * prime) % this.totalSize;
  }

  set(address, block) {
    let attempt = 0;
    let hash;
    do {
      hash = (this.hash(address) + attempt) % this.totalSize;
      if (!this.memory.has(hash) || this.memory.get(hash).address === address) {
        this.memory.set(hash, block);
        return;
      }
      attempt++;
    } while (attempt < this.totalSize);
    this.resize();
    this.set(address, block);
  }

  get(address) {
    let attempt = 0;
    let hash;
    do {
      hash = (this.hash(address) + attempt) % this.totalSize;
      if (this.memory.has(hash) && this.memory.get(hash).address === address) {
        return this.memory.get(hash);
      }
      attempt++;
    } while (attempt < this.totalSize && this.memory.has(hash));
    return null;
  }

  resize() {
    const oldMemory = new Map(this.memory);
    this.totalSize *= 2;
    this.memory.clear();
    for (const [, block] of oldMemory) {
      this.set(block.address, block);
    }
    console.log(`Resized memory to ${this.totalSize} bytes`);
  }

  allocate(size) {
    const blocksNeeded = Math.ceil(size / this.blockSize);
    let startAddress = null;
    let consecutiveBlocks = 0;

    for (let address = 0; address < this.totalSize; address += this.blockSize) {
      const block = this.get(address);
      if (block && block.free) {
        if (startAddress === null) startAddress = address;
        consecutiveBlocks++;

        if (consecutiveBlocks === blocksNeeded) {
          // Allocate the blocks
          for (let i = 0; i < blocksNeeded; i++) {
            const allocatedBlock = this.get(startAddress + i * this.blockSize);
            allocatedBlock.free = false;
          }
          return startAddress;
        }
      } else {
        startAddress = null;
        consecutiveBlocks = 0;
      }
    }

    return null; // Unable to allocate
  }

  deallocate(address, size) {
    