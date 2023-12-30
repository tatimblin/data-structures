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
        const currentIndex = this.#linkedList.indexOf(element);
        if (currentIndex !== -1) {
            this.#linkedList.removeFrom(currentIndex);
        }

        this.#linkedList.insertAt(element, 0);

        if (this.#linkedList.size > this.#maxSize) {
            this.#linkedList.pop();
        }
    }

    shift(): T | null {
        return this.#linkedList.removeFrom(0);
    }

    list() {
        return new Error("Not yet implemented");
    }

    clear() {
        this.#linkedList = new LinkedList<T>();
    }

    removeFrom(index: number): T | null {
        return this.#linkedList.removeFrom(index);
    }

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
}
