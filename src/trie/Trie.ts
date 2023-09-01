import { Node } from "./Node";
import { LinkedList } from "..";

export class Trie {
  #root: Node;
  #cache: Node;
  #prefix: string;

  constructor() {
    this.#root = new Node("");
    this.#cache = this.#root;
    this.#prefix = "";
  }

  /**
   * Adds a new string to the trie
   * @param word - string to add
   */
  add(word: string): void {
    const chars = word.split("");

    if (this.#has([...chars], this.#root)) {
      throw new Error(`${word} already exists`);
    }
  
    return this.#add(chars, this.#root);
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
  remove(word: string): void {
    const chars = word.split("");

    if (!this.#has([...chars], this.#root)) {
      throw new Error(`${word} does not exist`);
    }

    return this.#remove(chars, this.#root);
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
  has(word: string): boolean {
    const chars = word.split("");
    return this.#has(chars, this.#root);
  }

  #has(chars: string[], node: Node): boolean {
    if (chars.length === 0) {
      return node.complete.get();
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
  search(word: string): string[] {
    const chars = word.split("");

    let node: Node;
    try{
      node = this.#cursor([...chars], this.#cache);
    } catch {
      try {
        node = this.#cursor([...chars], this.#root);
      } catch {
        return [];
      }
    }

    const start = node.element;

    this.#cache = node;

    const result: string[] = [];
    const queue = new LinkedList<[Node, string]>();
    queue.push([node, this.#prefix]);

    while(queue.size > 0) {
      const [node, word] = queue.pop() || [];
      
      if (!node) {
        continue;
      }

      if (node.complete.get() && word) {
        result.push(word);
      }

      node.children && Object.values(node.children).forEach((node) => {
        queue.push([node, word + node.element]);
      });
    }

    return result;
  }

  #cursor(chars: string[], node: Node): Node {
    if (chars.length === 0) {
      return node;
    }

    const char = chars.shift() as string;
    this.#prefix = this.#prefix + char;

    if (node.children[char]) {
      return this.#cursor(chars, node.children[char]);
    }

    this.#cache = this.#root;
    this.#prefix = "";
    throw new Error("word not found");
  }

  __debug() {
    return {
      root: this.#root,
      cache: this.#cache,
    };
  }
}