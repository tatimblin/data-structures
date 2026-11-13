import { Node } from "./Node.js";
import { LinkedList } from "../linked-list/LinkedList.js";

export class Trie {
  #root: Node;

  constructor() {
    this.#root = new Node("");
  }

  /**
   * Adds a new string to the trie
   * @param word - string to add
   */
  add(word: string, weight = Infinity): void {
    const chars = word.split("");

    if (this.#has([...chars], this.#root)) {
      throw new Error(`"${word}" already exists`);
    }
  
    return this.#add(chars, weight, this.#root);
  }

  #add(chars: string[], weight: number, node: Node): void {
    if (chars.length === 0) {
      node.complete.set(true);
      node.weight = weight;
      return;
    }

    const char = chars.shift() as string;
    node.count.increment();

    if (node.children[char]) {
      this.#add(chars, weight, node.children[char]);
    } else {
      const newNode = new Node(char);
      node.children[char] = newNode;
      this.#add(chars, weight, newNode);
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
    node.count.decrement();

    if (node.count.get() === 0) {
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
   * Returns every word that starts with `prefix`, ordered by ascending weight.
   * Each call walks from the root, so results never depend on earlier calls.
   * An empty prefix returns an empty array.
   * @param prefix - string every returned word starts with
   */
  search(prefix: string): string[] {
    if (prefix === "") {
      return [];
    }

    const node = this.#find(prefix);

    if (!node) {
      return [];
    }

    const result: [string, number][] = []; // TODO: replace with heap
    const queue = LinkedList.elements<[Node, string]>();
    queue.insert(queue.size, [node, prefix]);

    while(queue.size > 0) {
      const item = queue.remove(queue.size - 1);

      if (!item) {
        continue;
      }

      const [currentNode, word] = item;

      if (currentNode.complete.get() && word) {
        result.push([word, currentNode.weight]);
      }

      currentNode.children && Object.values(currentNode.children).forEach((childNode) => {
        queue.insert(queue.size, [childNode, word + childNode.element]);
      });
    }

    result.sort((a, b) => a[1] - b[1]);

    return result.map(([word]) => word);
  }

  /**
   * Walks from the root along `prefix` and returns the node it ends on, or
   * null if the trie has no path for it.
   */
  #find(prefix: string): Node | null {
    let node = this.#root;

    // split("") to match how add() keys nodes (UTF-16 code units)
    for (const char of prefix.split("")) {
      const child = node.children[char];
      if (!child) {
        return null;
      }
      node = child;
    }

    return node;
  }

  __debug() {
    return {
      root: this.#root,
    };
  }
}