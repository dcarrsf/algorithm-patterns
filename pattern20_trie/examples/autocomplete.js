class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class AutocompleteTrie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    findWordsWithPrefix(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) return [];
            node = node.children[char];
        }
        return this._collectWords(node, prefix);
    }

    _collectWords(node, prefix) {
        const words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let char in node.children) {
            words.push(...this._collectWords(node.children[char], prefix + char));
        }
        return words;
    }
}

// Usage Example
const autocompleteTrie = new AutocompleteTrie();
["apple", "app", "application", "append", "banana"].forEach(word => autocompleteTrie.insert(word));
console.log(autocompleteTrie.findWordsWithPrefix("app"));  // ["apple", "app", "append", "application"]
