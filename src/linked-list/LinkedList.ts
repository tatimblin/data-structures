import { Node } from "./Node.js";
import { deepEquals } from "../utils/index.js";

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

    node.prev = pointer; // || this.#head;
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

    for (let i = 0; i < index; i++) {
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
   * Given an index it removes a node from the list and returns its element.
   */
  removeFrom(index: number): T | null {
    this.#validateIndex(index);

    let pointer: Node<T> = this.#head;

    // -1 to account for virtual head
    for (let i = -1; i < index; i++) {
      if (!pointer.next) {
        throw new Error(`Missing node in position ${i}`);
      }
      pointer = pointer.next;
    }

    const temp = pointer.element;

    if (pointer.next) {
      pointer.element = pointer.next.element;
      pointer.next = pointer.next.next
    } else {
      pointer.element = null;
      pointer.next = null;
    }

    this.#size -= 1;

    return temp;
  }

  /**
   * Given an element it removes a node from the list and returns its index.
   */
  removeElement(element: T): number {
    let pointer: Node<T> | null = this.#head.next;
    let index = 0;

    while (pointer) {
      if (pointer.element && deepEquals(pointer.element, element)) {
        console.log("found match", pointer.element, element)
        if (pointer.next) {
          pointer.next.prev = pointer.prev;
        }
        if (pointer.prev) {
          pointer.prev.next = pointer.next;
        }
        this.#size -= 1;

        return index;
      }

      pointer = pointer.next;
      index += 1;
    }

    return -1;
  }

  /**
   * Given an element it returns that nodes index.
   */
  indexOf(element: T): number {
    let pointer: Node<T> | null = this.#head.next;
    let index = 0;

    while (pointer) {
      if (pointer.element && deepEquals(pointer.element, element)) {
        return index;
      }

      pointer = pointer.next;
      index += 1;
    }

    return -1;
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
