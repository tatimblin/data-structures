# Trie

A tree-based data structure where partitions in a piece of data are represented as nodes, pointing to subserquent partitions as children.

## Methods

### add(word: string, weight?: number): void

Adds a new string to the trie. `weight` orders search results (lower first); it defaults to `Infinity`. Throws if the word already exists.

### remove(word: string): void

Removes a string from the trie

### has(word: string): boolean

Checks if a string exits in the trie

### search(prefix: string): string[]

Returns every word that starts with `prefix`, ordered by ascending weight. Every call starts from the root, so results never depend on earlier searches.

`search("")` returns `[]`. An empty prefix is treated as "no input yet", not "list every word".

## Changelog

- **0.6.2**: `search()` always starts from the root. Earlier versions continued from the node where the previous search ended, so `search("the")` followed by `search("y")` returned `"they"`. `search("")` now always returns `[]`; it used to return the previous search's subtree, or every word on a trie not yet searched.