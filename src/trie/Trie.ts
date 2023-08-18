import { Node } from "./Node";

export class Trie {
  #root: Node;
  #cache: Node;

  constructor() {
    this.#root = new Node("");
    this.#cache = this.#root;
  }

  /**
   * Adds a new string to the trie
   * @param word - string to add
   */
  add(word: string, node = this.#root): void {
    const chars = word.split("");
    this.#insert(chars, node);
  }

  #insert(chars: string[], node: Node) {
    if (chars.length === 0) {
      node.complete.set(true);
      return;
    }

    const char = chars.shift() as string;
    node.increment();

    if (node.children[char]) {
      this.#insert(chars, node.children[char]);
    } else {
      const newNode = new Node(char);
      node.children[char] = newNode;
      this.#insert(chars, newNode);
    }
  }

  /**
   * Removes a string from the trie
   * @param word - string to remove
   */
  remove(word: string): void {
    throw new Error("Not implemented");
  }

  /**
   * Checks if a string exits in the trie
   * @param word - string to look for
   */
  has(word: string): void {
    throw new Error("Not implemented");
  }

  /**
   * Traverses to the last available node, and preforms a breadth-first-search to
   * return all descendant strings. Results can be limited for brevity.
   * @param word - string to determine the starting node for search
   */
  search(word: string): void {
    throw new Error("Not implemented");
  }

  __debug() {
    return {
      root: this.#root,
      cache: this.#cache,
    };
  }
}