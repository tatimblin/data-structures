import { LeastRecentlyUsed } from "./index.js";

// TODO (ttimblin): expand test suite

describe("LeastRecentlyUsed.limit", () => {
    it("properly sets the limit", () => {
        const LRU = new LeastRecentlyUsed<number>(3);
        expect(LRU.limit).toBe(3);
    });

    it("properly restricts cache size to limit", () => {});
});
