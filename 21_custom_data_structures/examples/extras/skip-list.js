class SkipNode {
    constructor(value, level) {
        this.value = value;
        this.forward = new Array(level + 1).fill(null);
    }
}

class SkipList {
    constructor(maxLevel, p = 0.5) {
        this.maxLevel = maxLevel;
        this.p = p;
        this.header = new SkipNode(null, maxLevel);
        this.level = 0;
    }

    randomLevel() {
        let lvl = 0;
        while (Math.random() < this.p && lvl < this.maxLevel) {
            lvl++;
        }
        return lvl;
    }

    insert(value) {
        const update = new Array(this.maxLevel + 1).fill(null);
        let current = this.header;

        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
            update[i] = current;
        }

        const level = this.randomLevel();
        if (level > this.level) {
            for (let i = this.level + 1; i <= level; i++) {
                update[i] = this.header;
            }
            this.level = level;
        }

        const newNode = new SkipNode(value, level);
        for (let i = 0; i <= level; i++) {
            newNode.forward[i] = update[i].forward[i];
            update[i].forward[i] = newNode;
        }
    }

    search(value) {
        let current = this.header;
        for (let i = this.level; i >= 0; i--) {
            while (current.forward[i] !== null && current.forward[i].value < value) {
                current = current.forward[i];
            }
        }
        current = current.forward[0];
        return current !== null && current.value === value;
    }
}

// Usage Example
const skipList = new SkipList(4);
skipList.insert(3);
skipList.insert(6);
skipList.insert(7);
skipList.insert(9);
console.log(skipList.search(6)); // true
console.log(skipList.search(5)); // false
