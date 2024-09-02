# Trie

A Trie, also known as a prefix tree, is a tree-like data structure used to store and retrieve strings efficiently. It's particularly useful for tasks involving string searches, prefix matching, and autocomplete functionality. In a Trie, each node represents a character, and the path from the root to a node forms a string. The Trie allows for quick lookups and insertions, typically with O(L) time complexity, where L is the length of the string.

[Practice Questions](QUESTIONS.md)

## **Examples**:
1. **[Basic Trie](examples/basic-trie.js)**: Efficient word storage and prefix checking structure
2. **[Autocomplete](examples/autocomplete.js)**: Fast prefix-based word suggestion generator
3. **[Word Search in Grid](examples/word-search.js)**: Grid-based word finder using trie traversal
4. **[IP Address Routing Table](examples/routing-table.js)**: Longest prefix matching for IP routing

### **Observations**:

Consistencies:

1. All examples use a TrieNode class with a children property.
2. Insertion process is similar across all examples, traversing the trie character by character.
3. All examples demonstrate efficient prefix-based operations.

Differences:

1. The basic Trie focuses on word storage and prefix checking.
2. The Autocomplete Trie includes a method to collect all words with a given prefix.
3. The Word Search Trie incorporates a grid-based search algorithm (DFS) with the trie structure.
4. The IP Routing Trie uses binary prefixes and implements a longest prefix match algorithm.

These examples demonstrate the versatility of the Trie data structure in solving various string and prefix-based problems efficiently. While the core concept remains the same, each implementation is tailored to address specific problem requirements, showcasing how Tries can be adapted to different scenarios in software engineering.

## Complexity

Time Complexity:

1. **Insertion**: O(L), where L is the length of the word being inserted. This is because we need to traverse the trie character by character to insert the word.
2. **Search**: O(L), where L is the length of the word being searched. Similar to insertion, we need to traverse the trie character by character to find the word.
3. **Prefix Search**: O(P), where P is the length of the prefix. This is because we need to traverse the trie up to the last character of the prefix.
4. **Word Search in a Grid**: O(M * N * 3^L), where M is the number of rows, N is the number of columns in the grid, and L is the maximum length of the words. The time complexity is high due to the depth-first search (DFS) performed for each cell in the grid.
5. **Longest Prefix Match (IP Routing)**: O(L), where L is the length of the IP address. This is because we need to traverse the trie character by character to find the longest prefix match.

Space Complexity:

1. **Trie Structure**: O(N * L), where N is the number of words stored in the trie, and L is the average length of the words. This is because each node in the trie stores a character, and we need to store all the words.
2. **Autocomplete Tri**e: O(N * L), similar to the basic Trie structure, where N is the number of words stored, and L is the average length of the words.
3. **Word Search Trie**: O(N * L), where N is the number of words stored, and L is the average length of the words. The additional space is required to store the visited status for the grid-based search.
4. **IP Routing Trie**: O(N * L), where N is the number of prefixes stored, and L is the length of the longest prefix. The space complexity is similar to the basic Trie structure.

In summary, Trie algorithms generally have efficient time complexities for common operations, such as insertion, search, and prefix-based searches, with linear time complexity. However, the space complexity can be higher, especially when storing a large number of words or prefixes. The exact time and space complexities may vary depending on the specific problem and implementation details.

## Ways to Identify:

When you encounter a problem that matches these characteristics, considering a Trie-based solution could be beneficial.

Real-World Applications:

1. **Google Search**: Uses Tries for autocomplete suggestions as users type in the search bar.
2. **Spell checkers**: Microsoft Word and other text editors use Tries to quickly verify if a word exists in the dictionary.
3. **IP routing tables**: Networking equipment uses Trie-like structures for efficient IP address lookups.
4. **Autocomplete in IDEs**: Development environments like Visual Studio Code use Tries for code completion suggestions.

Keywords:

- "Prefix matching"
- "Autocomplete"
- "Dictionary implementation"
- "Word search"
- "String storage and retrieval"
- "Character-by-character processing"

Prompts:

1. The problem involves efficiently storing and searching for strings or words.
2. You need to perform prefix-based operations or searches.
3. The challenge mentions autocomplete or typeahead functionality.
4. You're asked to implement a dictionary with fast lookup times.
5. The problem requires finding all words with a given prefix.
6. You need to optimize space usage for storing a large number of strings with common prefixes.

[Practice Questions](QUESTIONS.md) | [Examples](examples/)