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

    node.prev = pointer;
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
   * Returns true if an element exists in the linked list.
   */
  has(element: T): boolean {
    if (this.getIndexByElement(element) >= 0) {
      return true;
    }

    return false;
  }

  /**
   * Adds an element at a specific index
   * @param element {T}
   * @param index {number}
   */
  insertElementAtIndex(element: T, index: number) {
    this.#validateIndex(index, true);

    const node = new Node(element);
    let pointer = this.#head;

    for (let i = 0; i < index; i++) {
      if (!pointer.next) {
        throw new Error(`Missing node in position ${i}`);
      }
      pointer = pointer.next;
    }

    node.next = pointer.next;
    pointer.next = node;
    this.#size += 1;
  }

  /**
   * Gets an element from the linked list at a specified index
   * @param index - the index to 
   * @returns {T} an element in the linked list
   */
  getElementByIndex(index: number): T | null {
    this.#validateIndex(index);
    if (index === 0) {
      return this.#head.next && this.#head.next.element;
    }

    let pointer: Node<T> | null = this.#head;

    for (let i = 0; i <= index; i++) {
      if (!pointer) throw new Error(`Missing node in position ${i}`);
      pointer = pointer.next;
    }

    if (!pointer) throw new Error(`Missing node in position ${index}`);

    return pointer.element;
  }

  /**
   * Gets the index of a specific element in the linked list (-1 if not present)
   * @param element {T} - the element
   * @returns {number}
   */
  getIndexByElement(element: T): number {
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
   * Given an index it removes a node from the list and returns its element.
   */
  removeElementByIndex(index: number): T | null {
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
  removeElementByElement(element: T): number {
    let pointer: Node<T> | null = this.#head.next;
    let index = 0;

    while (pointer) {
      if (pointer.element && deepEquals(pointer.element, element)) {
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
   * Gets all elements from the linked list at a specified range
   * @param start - the starting index
   * @param end - the ending index
   * @returns {[]T} a list of elements in the linked list
   */
  toArray(start = 0, end = this.#size): T[] {
    const list: T[] = [];

    let pointer: Node<T> = this.#head;
    let index = 0;
    while(pointer.next) {
      pointer = pointer.next;
      if (!pointer || !pointer.element) {
        break;
      }

      if (index >= start) {
        list.push(pointer.element);
      }

      if (index >= end) {
        break;
      }

      index += 1;
    }

    return list;
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
