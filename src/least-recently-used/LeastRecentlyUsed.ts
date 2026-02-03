import { LinkedList, Node } from "../index.js";

export class LeastRecentlyUsed<Value, Key = Value> {
    #references: Map<Key, Node<Value>>;
    #linkedList: LinkedList<Value, "node", Key>;
    #limit: number;

    constructor(limit: number) {
        this.#references = new Map();
        this.#linkedList = LinkedList.nodes<Value, Key>();
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
     * Resize the cache.
     * @param limit - The max size of the cache.
     */
    set limit(limit: number) {
        this.#limit = limit;
    }

    /**
     * Get the element for a particular node and move it to the head of the cache.
     * @param key - some piece of data to match.
     */
    get(key: Key): Value {
        const node = this.#references.get(key);
        if (!node?.element) {
            throw new Error(`${key} was not found in cache`);
        }

        this.#linkedList.removeNode(node);
        this.#linkedList.insert(0, node.element);

        return node.element;
    }

    /**
     * Updates a value in the cache in-place if found, otherwise adds to the head of the cache.
     * @param key - the key.
     * @param value - data to update.
     */
    set(key: Key, value: Value) {
        throw new Error("not yet implemented");
    }

    /**
     * Returns the head of the cache.
     */
    peek(): Value | null {
        const node = this.#linkedList.get(0);
        return node?.element ?? null;
    }

    /**
     * Removes and returns the head of the cache.
     */
    pop(): Value {
        throw new Error("not yet implemented");
    }

    /**
     * Returns the keys of the cache.
     */
    keys(): Key[] {
        throw new Error("not yet implemented");
    }

    /**
     * Returns the values of the cache.
     */
    values(): Value[] {
        throw new Error("not yet implemented");
    }

    /**
     * Returns true if element exists in cache, without moving it to the head of the cache.
     * @param key - some piece of data to match.
     */
    has(key: Key): boolean {
        return this.#references.has(key);
    }

    /**
     * Removes an element from the cache.
     * @param key - some piece of data to match.
     */
    delete(key: Key): void {
        throw new Error("not yet implemented");
    }

    /**
     * Remove all nodes in cache.
     */
    clear(): void {
        throw new Error("not yet implemented");
    }
}
