class Node {
    constructor(char, freq, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

function huffmanCoding(chars, freqs) {
    let nodes = chars.map((char, i) => new Node(char, freqs[i]));

    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        let left = nodes.shift();
        let right = nodes.shift();
        let parent = new Node(null, left.freq + right.freq, left, right);
        nodes.push(parent);
    }

    return nodes[0];
}

const chars = ['a', 'b', 'c', 'd'];
const freqs = [30, 25, 20, 15];
const root = huffmanCoding(chars, freqs);
console.log(root); // Output: Node object representing the Huffman tree
