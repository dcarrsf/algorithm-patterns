class SuffixArray {
    constructor(text) {
        this.text = text;
        this.suffixes = this.buildSuffixArray();
    }

    buildSuffixArray() {
        const n = this.text.length;
        const suffixes = Array.from({length: n}, (_, i) => i);
        
        suffixes.sort((a, b) => {
            if (a === b) return 0;
            while (a < n && b < n) {
                if (this.text[a] !== this.text[b]) {
                    return this.text[a].localeCompare(this.text[b]);
                }
                a++;
                b++;
            }
            return b - a;
        });

        return suffixes;
    }

    search(pattern) {
        const n = this.text.length;
        const m = pattern.length;
        let left = 0;
        let right = n - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const suffix = this.text.substr(this.suffixes[mid]);
            const cmp = suffix.substr(0, m).localeCompare(pattern);

            if (cmp === 0) {
                return this.suffixes[mid];
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1; // Pattern not found
    }
}

// Usage Example
const sa = new SuffixArray("banana");
console.log(sa.search("ana")); // 1 (index where "ana" is found)
console.log(sa.search("nan")); // 2
console.log(sa.search("xyz")); // -1 (not found)
