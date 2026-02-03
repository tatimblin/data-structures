/**
 * Min-Heap implementation
 * A complete binary tree where each parent node is less than or equal to its children
 */
export class MinHeap<T> {
  #items: T[] = [];
  #compare: (a: T, b: T) => number;

  constructor(compareFn: (a: T, b: T) => number) {
    this.#compare = compareFn;
  }

  /**
   * The number of items in the heap
   */
  get size(): number {
    return this.#items.length;
  }

  /**
   * Returns true if the heap is empty
   */
  get isEmpty(): boolean {
    return this.#items.length === 0;
  }

  /**
   * Returns the minimum element without removing it
   */
  peek(): T | undefined {
    return this.#items[0];
  }

  /**
   * Adds an element to the heap
   * @param item - the element to add
   */
  push(item: T): void {
    this.#items.push(item);
    this.#heapifyUp(this.#items.length - 1);
  }

  /**
   * Removes and returns the minimum element
   * @returns the minimum element, or undefined if heap is empty
   */
  pop(): T | undefined {
    if (this.#items.length === 0) return undefined;
    if (this.#items.length === 1) return this.#items.pop();

    const min = this.#items[0];
    this.#items[0] = this.#items.pop()!;
    this.#heapifyDown(0);
    return min;
  }

  /**
   * Creates a shallow copy of the heap
   * @returns a new MinHeap with the same elements and comparator
   */
  clone(): MinHeap<T> {
    const newHeap = new MinHeap<T>(this.#compare);
    newHeap.#items = [...this.#items];
    return newHeap;
  }

  /**
   * Converts the heap to an array (does not preserve heap order)
   * @returns array copy of heap elements
   */
  toArray(): T[] {
    return [...this.#items];
  }

  /**
   * Restores heap property by moving element up
   * @param index - index of element to move up
   */
  #heapifyUp(index: number): void {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.#compare(this.#items[index], this.#items[parentIndex]) >= 0) break;

      this.#swap(index, parentIndex);
      index = parentIndex;
    }
  }

  /**
   * Restores heap property by moving element down
   * @param index - index of element to move down
   */
  #heapifyDown(index: number): void {
    while (true) {
      let minIndex = index;
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;

      if (leftChild < this.#items.length &&
          this.#compare(this.#items[leftChild], this.#items[minIndex]) < 0) {
        minIndex = leftChild;
      }

      if (rightChild < this.#items.length &&
          this.#compare(this.#items[rightChild], this.#items[minIndex]) < 0) {
        minIndex = rightChild;
      }

      if (minIndex === index) break;

      this.#swap(index, minIndex);
      index = minIndex;
    }
  }

  /**
   * Swaps two elements in the heap
   */
  #swap(i: number, j: number): void {
    [this.#items[i], this.#items[j]] = [this.#items[j], this.#items[i]];
  }
}