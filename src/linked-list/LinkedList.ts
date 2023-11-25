import { Node } from "./Node.js";

export class LinkedList<T> {
  #head: Node<T>;
  #size: number;

  constructor() {
    this.#head = new Node();
    this.#size = 0;
  }

  /**
   * The number of nodes in the linked list
   */
  get size(): number {
    return this.#size;
  }

  /**
   * Adds an element at the tail of the linked list
   * @param element - the element to add
   */
  push(element: T): void {
    const node = new Node(element);

    let pointer = this.#head;

    while (pointer && pointer.next) {
      pointer = pointer.next;
    }

    pointer.next = node;
    this.#size += 1;
  }

  /**
   * Removes and returns the element at the tail of the linked list.
   */
  pop(): T | null {
    if (this.#size === 0) {
      return null;
    }

    if (this.#size === 1 && this.#head.next) {
      const node = this.#head.next.element;
      this.#head = new Node();
      this.#size = 0;
      return node;
    }

    let pointer = this.#head;

    while(pointer && pointer.next?.next) {
      pointer = pointer.next;
    }

    const temp = pointer.next;
    pointer.next = null;
    this.#size -= 1;

    return temp && temp.element;
  }

  /**
   * Adds an element at a specific index.
   */
  insertAt(element: T, index: number): void {
    this.#validateIndex(index, true);

    const node = new Node(element);

    let pointer: Node<T> | null = this.#head;

    for (let i = 1; i <= index; i++) {
      if (!pointer) throw new Error(`Missing node in position ${i}`);
      pointer = pointer.next;
    }

    if (!pointer) throw new Error(`Missing node in position ${index}`);

    node.next = pointer.next;
    if (pointer) {
      pointer.next = node;
    }
    this.#size += 1;
  }

  /**
   * Gets an element from the linked list at a specified index
   * @param index - the index to 
   * @returns {any} - an element in the linked list
   */
  getFrom(index: number): T | null {
    this.#validateIndex(index);
    if (index === 0) return this.#head.next && this.#head.next.element;

    let pointer: Node<T> | null = this.#head;

    for (let i = 0; i <= index; i++) {
      if (!pointer) throw new Error(`Missing node in position ${i}`);
      pointer = pointer.next;
    }

    if (!pointer) throw new Error(`Missing node in position ${index}`);

    return pointer.element;
  }

  /**
   * Removes a node from the list and returns its element.
   */
  removeFrom(): void {
    throw new Error("Not implemented");
  }

  /**
   * Find and removes a specific element.
   */
  removeElement(): void {
    throw new Error("Not implemented");
  }

  /**
   * Return the index of a specific element.
   */
  indexOf(): void {
    throw new Error("Not implemented");
  }

  /**
   * Throws an error if an index is out of bounds
   */
  #validateIndex(index: number, tail?: boolean): void {
    const size = tail ? this.size : this.size - 1;
    if (index < 0 || index > size) {
      throw new Error("Index is out of bounds");
    }
  }
}
