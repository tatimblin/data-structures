import { LeastRecentlyUsed } from "./index.js";

// TODO (ttimblin): expand test suite

describe("LeastRecentlyUsed.limit", () => {
    it("properly updates the limit", () => {
        const LRU = new LeastRecentlyUsed<number>(3);
        expect(LRU.limit).toBe(3);
        
        LRU.withLimit(5);
        expect(LRU.limit).toBe(5);
    });

    it("properly invalidates elements after limit changes", () => {})
});
