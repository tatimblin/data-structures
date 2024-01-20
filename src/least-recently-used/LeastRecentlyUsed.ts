import { LinkedList } from "../index.js";

export class LeastRecentlyUsed<T> {
    #linkedList: LinkedList<T>;
    #maxSize: number;

    constructor(maxSize: number) {
        this.#linkedList = new LinkedList<T>();
        this.#maxSize = maxSize;
    }

    /**
     * Adds a new element or moves an existing element to the head of the cache.
     * @param element - data to add
     * @returns 
     */
    push(element: T): void {
        this.#linkedList.removeElement(element);
        this.#linkedList.insertAt(element, 0);

        if (this.#linkedList.size > this.#maxSize) {
            this.#linkedList.pop();
        }
    }

    /**
     * Removes and returns the element at the head of the cache.
     * @returns element at the head of the cache
     */
    shift(): T | null {
        return this.#linkedList.removeFrom(0);
    }

    list() {
        return this.#linkedList.getFromRange();
    }

    /**
     * Clears the cache.
     */
    clear() {
        this.#linkedList = new LinkedList<T>();
    }

    /**
     * Removes and returns the element at a particular index in the cache.
     * @param index - the index of the element to remove
     * @returns {T} element at index in cache
     */
    removeFrom(index: number): T | null {
        return this.#linkedList.removeFrom(index);
    }

    /**
     * Removes an element from the cache, and returns the index it was removed at.
     * @param element - the element to remove
     * @returns {number} index of element removed
     */
    removeElement(element: T): number {
        return this.#linkedList.removeElement(element);
    }

    /**
     * Returns the index in the linked list an element is found at
     * @param element 
     * @returns {number}
     */
    indexOf(element: T) {
        return this.#linkedList.indexOf(element);
    }

    /**
     * Get the size of the cache.
     * @returns {number} size of the cache
     */
    get size() {
        return this.#linkedList.size;
    }
}
