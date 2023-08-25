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
    return this.#add(chars, node);
  }

  #add(chars: string[], node: Node): void {
    if (chars.length === 0) {
      node.complete.set(true);
      return;
    }

    const char = chars.shift() as string;
    node.increment();

    if (node.children[char]) {
      this.#add(chars, node.children[char]);
    } else {
      const newNode = new Node(char);
      node.children[char] = newNode;
      this.#add(chars, newNode);
    }
  }

  /**
   * Removes a string from the trie
   * @param word - string to remove
   */
  remove(word: string, node = this.#root): void {
    const chars = word.split("");

    if (!this.#has([...chars], node)) {
      throw new Error(`${word} does not exist`);
    }

    return this.#remove(chars, node);
  }

  #remove(chars: string[], node: Node): void {
    if (chars.length === 0) {
      node.complete.set(false);
      return;
    }

    const char = chars.shift() as string;
    node.decrement();

    if (node.count === 0) {
      delete node.children[char];
      return;
    }

    this.#remove(chars, node.children[char]);
  }

  /**
   * Checks if a string exists in the trie
   * @param word - string to look for
   */
  has(word: string, node = this.#root): boolean {
    const chars = word.split("");
    return this.#has(chars, node);
  }

  #has(chars: string[], node: Node): boolean {
    if (chars.length === 0) {
      return true;
    }

    const char = chars.shift() as string;

    if (node.children[char]) {
      return this.#has(chars, node.children[char]);
    }
    return false;
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