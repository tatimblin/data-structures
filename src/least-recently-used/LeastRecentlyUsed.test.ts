import { LeastRecentlyUsed } from "./index.js";

describe("LeastRecentlyUsed", () => {
    describe("push()", () => {
        it("adds new elements to the head of the list as the cache overloads", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(1);
            LRU.push(2);
            LRU.push(3);
            LRU.push(4);
            LRU.push(5);

            expect(LRU.indexOf(5)).toBe(0);
            expect(LRU.indexOf(4)).toEqual(1);
            expect(LRU.indexOf(3)).toEqual(2);
            expect(LRU.indexOf(2)).toEqual(-1);
            expect(LRU.indexOf(1)).toEqual(-1);
        });
    });

    describe("shift()", () => {
        it("does nothing if the cache is empty", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            expect(() => LRU.shift()).toThrow("Index is out of bounds");
        });

        it("removes and returns the element at the head of the cache", () => {
            const LRU = new LeastRecentlyUsed<number>(3);

            LRU.push(3);
            LRU.push(2);
            LRU.push(1);

            expect(LRU.shift()).toEqual(1);
            expect(LRU.shift()).toEqual(2);
            expect(LRU.shift()).toEqual(3);
        });
    });

    // describe("list()", () => {
    //     it("", () => {
    //         const LRU = new LeastRecentlyUsed();
    //     });
    // });

    // describe("clear()", () => {
    //     it("", () => {
    //         const LRU = new LeastRecentlyUsed();
    //     });
    // });

    // describe("LinkedList.removeFrom()", () => {
    //     it("", () => {
    //         const LRU = new LeastRecentlyUsed();
    //     });
    // });

    // describe("LinkedList.removeElement()", () => {
    //     it("", () => {
    //         const LRU = new LeastRecentlyUsed();
    //     });
    // });

    // describe("LinkedList.indexOf()", () => {
    //     it("", () => {
    //         const LRU = new LeastRecentlyUsed();
    //     });
    // });
});
