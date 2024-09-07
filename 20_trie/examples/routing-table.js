class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfPrefix = false;
        this.nextHop = null;
    }
}

class IPRoutingTrie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(prefix, nextHop) {
        let node = this.root;
        for (let bit of prefix) {
            if (!node.children[bit]) {
                node.children[bit] = new TrieNode();
            }
            node = node.children[bit];
        }
        node.isEndOfPrefix = true;
        node.nextHop = nextHop;
    }

    longestPrefixMatch(address) {
        let node = this.root;
        let lastMatchedNode = null;

        for (let bit of address) {
            if (!node.children[bit]) break;
            node = node.children[bit];
            if (node.isEndOfPrefix) {
                lastMatchedNode = node;
            }
        }

        return lastMatchedNode ? lastMatchedNode.nextHop : null;
    }
}

// Usage Example
const ipRoutingTrie = new IPRoutingTrie();
ipRoutingTrie.insert("0001", "Router A");
ipRoutingTrie.insert("00010", "Router B");
ipRoutingTrie.insert("00011", "Router C");
console.log(ipRoutingTrie.longestPrefixMatch("000101"));  // "Router B"
