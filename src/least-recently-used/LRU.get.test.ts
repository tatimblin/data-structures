import { LeastRecentlyUsed } from "./index.js";

describe("LeastRecentlyUsed.get", () => {
    it("returns the value for a given key", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        expect(LRU.get("a")).toBe("apple");
    });

    it("moves the accessed element to the front of the cache", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        LRU.set("c", "cherry");

        // After inserts, "cherry" should be at the front
        expect(LRU.peek()).toBe("cherry");

        // Access "apple", which should move it to the front
        LRU.get("a");
        expect(LRU.peek()).toBe("apple");
    });

    it("moves middle element to front when accessed", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");
        LRU.set("c", "cherry");

        // Access "banana" (middle element)
        LRU.get("b");
        expect(LRU.peek()).toBe("banana");
    });

    it("throws an error when key is not found", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        expect(() => LRU.get("nonexistent")).toThrow("nonexistent was not found in cache");
    });

    it("does not change size when getting an element", () => {
        const LRU = new LeastRecentlyUsed<string, string>(3);
        LRU.set("a", "apple");
        LRU.set("b", "banana");

        expect(LRU.size).toBe(2);
        LRU.get("a");
        expect(LRU.size).toBe(2);
    });
});
