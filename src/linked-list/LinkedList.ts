import { Node } from "../node";

export class LinkedList {
  #head: Node | null;
  #size: number;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  get size(): number {
    return this.#size;
  }

  /**
   * Adds an element to the tail of the linked list
   * @param element - the element to add
   */
  add(element: any): void {
    const node = new Node(element);

    if (this.#head === null) {
      this.#head = node;
    } else {
      let current = this.#head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.#size += 1;
  }

  /**
   * Gets an element from the linked list at a specified index
   * @param index - the index to 
   * @returns {any} - an element in the linked list
   */
  getFrom(index: number) {
    if (index < 0 || index >= this.#size) throw new Error("Index out of bounds");
    if (index === 0) return this.#head?.element;

    let current = this.#head;
    let iteration = 0;

    while (iteration < index) {
      if (!current) throw new Error(`Missing node in position ${iteration}`);

      current = current.next;
      iteration += 1;
    }

    return current?.element;
  }
}