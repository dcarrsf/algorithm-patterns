class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class WordSearchTrie {
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

    findWords(board) {
        const result = new Set();
        const visited = Array(board.length).fill().map(() => Array(board[0].length).fill(false));

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                this._dfs(board, i, j, this.root, "", visited, result);
            }
        }

        return Array.from(result);
    }

    _dfs(board, i, j, node, word, visited, result) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j]) return;

        const char = board[i][j];
        if (!node.children[char]) return;

        visited[i][j] = true;
        node = node.children[char];
        word += char;

        if (node.isEndOfWord) {
            result.add(word);
        }

        this._dfs(board, i+1, j, node, word, visited, result);
        this._dfs(board, i-1, j, node, word, visited, result);
        this._dfs(board, i, j+1, node, word, visited, result);
        this._dfs(board, i, j-1, node, word, visited, result);

        visited[i][j] = false;
    }
}

// Usage Example
const wordSearchTrie = new WordSearchTrie();
["eat", "pea", "rain", "ear"].forEach(word => wordSearchTrie.insert(word));
const board = [
    ['e', 'a', 'r'],
    ['a', 'p', 'n'],
    ['t', 'e', 'i']
];
console.log(wordSearchTrie.findWords(board));  // ["eat", "pea", "ear"]
