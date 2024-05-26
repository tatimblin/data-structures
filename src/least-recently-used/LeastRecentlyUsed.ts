import { LinkedList } from "../index.js";

export class LeastRecentlyUsed<Value, Key = Value> {
    #linkedList: LinkedList<Value, Key>;
    #limit: number;

    constructor(limit: number) {
        this.#linkedList = new LinkedList<Value, Key>();
        this.#limit = limit;
    }

    /**
     * The number of items in the cache.
     */
    get size(): number {
        return this.#linkedList.size;
    }

    /**
     * The maximum size the cache can be.
     */
    get limit(): number {
        return this.#limit;
    }

    /**
     * Update the limit of an existing cache.
     * @param limit - max number of elements.
     * @returns this
     */
    withLimit(limit: number) {
        this.#limit = limit;
        return this;
    }

    /**
     * Get the element for a particular node and move it to the head of the cache.
     * @param key - some piece of data to match.
     */
    get(key: Key): Value {
        throw new Error("not yet implemented");
    }

    /**
     * Adds an element to the head of the cache, removes duplicate.
     * @param value - data to add.
     */
    post(value: Value): void {
        throw new Error("not yet implemented");
    }
    
    /**
     * Updates a value in the cache in-place if found, otherwise adds to the head of the cache.
     * @param value - data to update.
     * @param key - explicitly provide the key.
     */
    put(value: Value, key?: Key) {
        throw new Error("not yet implemented");
    }

    /**
     * Removes an element from the cache.
     * @param key - some piece of data to match.
     */
    delete(key: Key): Value {
        throw new Error("not yet implemented");
    }

    /**
     * Removes and returns the head of the cache.
     */
    pop(): Value {
        throw new Error("not yet implemented");
    }

    /**
     * Returns true if element exists in cache, without moving it to the head of the cache.
     * @param key - some piece of data to match.
     */
    has(key: Key): boolean {
        throw new Error("not yet implemented");
    }

    /**
     * Return an array of each element in the cache.
     */
    toArray(): Value[] {
        throw new Error("not yet implemented");
    }

    /**
     * Remove all nodes in cache.
     */
    clear(): void {
        throw new Error("not yet implemented");
    }
}
