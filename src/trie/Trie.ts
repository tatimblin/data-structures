import { Node } from "../node";

export class Trie {
  #root: Node;
  #cache: Node;

  constructor(words: string[] = []) {
    this.#root = new Node(null);
    this.#cache = this.#root;

    for (const word of words) {
      this.add(word);
    }
  }

  /**
   * Adds a new string to the trie
   * @param word - string to add
   */
  add(word: string): void {
    throw new Error("Not implemented");
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
}