# Trie

A tree-based data structure where partitions in a piece of data are represented as nodes, pointing to subserquent partitions as children.

## Methods

### add(word: string): void

Adds a new string to the trie

### remove(word: string): void

Removes a string from the trie

### has(word: string): boolean

Checks if a string exits in the trie

### search(word: string, limit: number, offset: number): string[]

Traverses to the last available node, and preforms a breadth-first-search to return all descendant strings. Results can be limited for brevity.