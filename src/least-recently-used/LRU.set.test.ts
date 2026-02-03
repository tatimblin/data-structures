import { LeastRecentlyUsed } from "./index.js";

describe("LeastRecentlyUsed.set", () => {
    it("adds a new value to the cache", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        expect(LRU.has("a")).toBe(true);
        expect(LRU.get("a")).toBe("apple");
    });

    it("adds new values at the head of the cache", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        expect(LRU.peek()).toBe("banana");
    });

    it("updates an existing value and moves it to the head", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        LRU.set("c", "cherry");

        // "cherry" is at the head
        expect(LRU.peek()).toBe("cherry");

        // Update "apple" with a new value
        LRU.set("a", "apricot");

        // "apricot" should now be at the head
        expect(LRU.peek()).toBe("apricot");
        expect(LRU.get("a")).toBe("apricot");
    });

    it("evicts the least recently used item when exceeding limit", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        LRU.set("c", "cherry");

        expect(LRU.size).toBe(3);
        expect(LRU.has("a")).toBe(true);

        // Adding a 4th item should evict "apple" (the tail/least recently used)
        LRU.set("d", "date");

        expect(LRU.size).toBe(3);
        expect(LRU.has("a")).toBe(false);
        expect(LRU.has("b")).toBe(true);
        expect(LRU.has("c")).toBe(true);
        expect(LRU.has("d")).toBe(true);
    });

    it("does not evict when updating an existing key", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        LRU.set("c", "cherry");

        // Update existing key - should not evict anything
        LRU.set("a", "apricot");

        expect(LRU.size).toBe(3);
        expect(LRU.has("a")).toBe(true);
        expect(LRU.has("b")).toBe(true);
        expect(LRU.has("c")).toBe(true);
    });

    it("increments size when adding new items", () => {
        const LRU = new LeastRecentlyUsed<string, string>(5);
        expect(LRU.size).toBe(0);

        LRU.set("a", "apple");
        expect(LRU.size).toBe(1);

        LRU.set("b", "banana");
        expect(LRU.size).toBe(2);
    });

    it("does not change size when updating existing items", () => {
        const LRU = new LeastRecentlyUsed<string, string>(5);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        expect(LRU.size).toBe(2);

        LRU.set("a", "apricot");
        expect(LRU.size).toBe(2);
    });

    it("evicts correct item after get() reorders cache", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        LRU.set("c", "cherry");

        // Access "apple" to move it to the head
        LRU.get("a");

        // Now order is: apple, cherry, banana (banana is tail)
        // Adding new item should evict "banana"
        LRU.set("d", "date");

        expect(LRU.has("a")).toBe(true);
        expect(LRU.has("b")).toBe(false);
        expect(LRU.has("c")).toBe(true);
        expect(LRU.has("d")).toBe(true);
    });
});
